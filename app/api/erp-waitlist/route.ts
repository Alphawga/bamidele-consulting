import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Payload = {
  fullName?: string;
  companyName?: string;
  role?: string;
  email?: string;
  whatsapp?: string;
  industry?: string;
  teamSize?: string;
  currentTooling?: string;
  source?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { fullName, companyName, role, email, whatsapp, industry, teamSize, currentTooling, source } = data;

  if (!fullName?.trim()) {
    return NextResponse.json({ error: "Full name required" }, { status: 422 });
  }
  if (!companyName?.trim()) {
    return NextResponse.json({ error: "Company name required" }, { status: 422 });
  }
  if (!role?.trim()) {
    return NextResponse.json({ error: "Role required" }, { status: 422 });
  }
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 422 });
  }
  if (!whatsapp?.trim()) {
    return NextResponse.json({ error: "WhatsApp number required" }, { status: 422 });
  }
  if (!industry?.trim()) {
    return NextResponse.json({ error: "Industry required" }, { status: 422 });
  }
  if (!teamSize?.trim()) {
    return NextResponse.json({ error: "Team size required" }, { status: 422 });
  }

  try {
    await prisma.erpWaitlist.create({
      data: {
        fullName,
        companyName,
        role,
        email,
        whatsapp,
        industry,
        teamSize,
        currentTooling: currentTooling || null,
        source: source ?? null,
      },
    });
  } catch (error) {
    console.error("Prisma insert failed for /api/erp-waitlist:", error);
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
      subject: `New Okoh ERP waitlist signup: ${companyName}`,
      text: [
        `Full name: ${fullName}`,
        `Company: ${companyName}`,
        `Role: ${role}`,
        `Email: ${email}`,
        `WhatsApp: ${whatsapp}`,
        `Industry: ${industry}`,
        `Team size: ${teamSize}`,
        `Current tooling: ${currentTooling || "not provided"}`,
      ].join("\n"),
    });
    if (error) console.error("Resend send failed for /api/erp-waitlist:", error);
  }

  return NextResponse.json({ ok: true });
}
