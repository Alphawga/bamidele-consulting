import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidPaystackSignature } from "@/lib/paystack";

type ChargeSuccessEvent = {
  event: string;
  data: {
    reference: string;
    amount: number;
    status: string;
    customer: { email: string };
  };
};

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-paystack-signature");

  if (!isValidPaystackSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: ChargeSuccessEvent;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (event.event === "charge.success") {
    const { reference, amount, customer } = event.data;
    await prisma.auditPayment.upsert({
      where: { reference },
      update: { status: "success" },
      create: {
        reference,
        email: customer.email,
        amountKobo: amount,
        status: "success",
        answers: {},
      },
    });
  }

  return NextResponse.json({ received: true });
}
