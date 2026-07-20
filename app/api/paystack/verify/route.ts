import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { auditAmountKobo, verifyPaystackTransaction } from "@/lib/paystack";

type Payload = {
  reference?: string;
  answers?: Record<string, unknown>;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { reference, answers } = data;
  if (!reference) {
    return NextResponse.json({ error: "Reference required" }, { status: 422 });
  }

  let verification;
  try {
    verification = await verifyPaystackTransaction(reference);
  } catch (error) {
    console.error("Paystack verify request failed:", error);
    return NextResponse.json({ error: "Could not verify payment" }, { status: 502 });
  }

  const { data: tx } = verification;
  const paid = tx.status === "success" && tx.currency === "NGN" && tx.amount === auditAmountKobo();

  if (!paid) {
    return NextResponse.json({ paid: false });
  }

  await prisma.auditPayment.upsert({
    where: { reference },
    update: { status: "success" },
    create: {
      reference,
      email: tx.customer.email,
      amountKobo: tx.amount,
      status: "success",
      answers: (answers ?? {}) as Prisma.InputJsonValue,
    },
  });

  return NextResponse.json({ paid: true });
}
