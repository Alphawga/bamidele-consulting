import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  business?: string;
  does?: string;
  breaking?: string;
  contact?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, business, does, breaking, contact } = data;
  if (!name || !business || !does || !breaking || !contact) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  // No key configured: tell the client to use the mailto handoff.
  if (!apiKey) {
    return NextResponse.json({ ok: true, fallback: true });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@example.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "site@example.com";

  const text = [
    `Name: ${name}`,
    `Business: ${business}`,
    `What they do: ${does}`,
    `What is breaking: ${breaking}`,
    `Reach them: ${contact}`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: contact.includes("@") ? contact : undefined,
    subject: `New enquiry from ${name} (${business})`,
    text,
  });

  if (error) {
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
