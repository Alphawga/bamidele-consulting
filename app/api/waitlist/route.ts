import { NextResponse } from "next/server";

type Payload = {
  email?: string;
  source?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { email, source } = data;
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL ?? "hello@example.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "site@example.com";

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New waitlist signup${source ? ` (${source})` : ""}`,
      text: `Email: ${email}\nSource: ${source ?? "unknown"}`,
    });
    if (error) {
      console.error("Resend send failed for /api/waitlist:", error);
      return NextResponse.json({ error: "Could not join waitlist" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
