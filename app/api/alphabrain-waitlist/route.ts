import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildNotificationEmail } from "@/lib/email";

type Payload = {
  email?: string;
  slipping?: string;
  source?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { email, slipping, source } = data;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 422 });
  }

  try {
    await prisma.alphabrainWaitlist.create({
      data: {
        email,
        slipping: slipping?.trim() || null,
        source: source ?? null,
      },
    });
  } catch (error) {
    console.error("Prisma insert failed for /api/alphabrain-waitlist:", error);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL ?? "site@example.com";
    const to = process.env.CONTACT_TO_EMAIL ?? "hello@example.com";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New AlphaBrain waitlist signup: ${email}`,
      text: [
        `Email: ${email}`,
        `What keeps slipping: ${slipping?.trim() || "not provided"}`,
        `Source: ${source ?? "unknown"}`,
      ].join("\n"),
      html: buildNotificationEmail({
        eyebrow: "alphawga.com / alphabrain",
        title: "New AlphaBrain waitlist signup",
        rows: [
          { label: "Email", value: email },
          { label: "Source", value: source ?? "unknown" },
        ],
        longRows: [{ label: "What keeps slipping", value: slipping?.trim() || "not provided" }],
      }),
    });
    if (error) console.error("Resend send failed for /api/alphabrain-waitlist:", error);
  }

  return NextResponse.json({ ok: true });
}
