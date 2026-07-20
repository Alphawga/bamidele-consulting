import { NextResponse } from "next/server";
import { auditQuestions, diagnoseOperation, isValidAnswers, type AuditAnswers, type AuditTier } from "@/lib/audit";
import { buildNotificationEmail } from "@/lib/email";

const tierTone: Record<AuditTier, "forest" | "gold" | "oxblood"> = {
  consolidated: "forest",
  fragmenting: "gold",
  fragmented: "oxblood",
  critical: "oxblood",
};

type Payload = {
  email?: string;
  answers?: Partial<Record<keyof AuditAnswers, string>>;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { email, answers } = data;
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 422 });
  }
  if (!answers || !isValidAnswers(answers)) {
    return NextResponse.json({ error: "Missing or invalid answers" }, { status: 422 });
  }

  const result = diagnoseOperation(answers);

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL ?? "hello@example.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "site@example.com";

    const answerLines = auditQuestions.map((q) => `${q.prompt}\n  ${answers[q.key]}`);
    const text = [
      `Email: ${email}`,
      `Tier: ${result.tier} (${result.score}/${result.maxScore})`,
      "",
      ...answerLines,
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New operations audit from ${email}`,
      text,
      html: buildNotificationEmail({
        eyebrow: "alphawga.com / audit",
        title: `New operations audit from ${email}`,
        badge: {
          label: result.tier,
          value: `${result.score} / ${result.maxScore}`,
          tone: tierTone[result.tier],
        },
        rows: [{ label: "Email", value: email }],
        longRows: auditQuestions.map((q) => ({
          label: q.prompt,
          value: q.options.find((opt) => opt.value === answers[q.key])?.label ?? answers[q.key],
        })),
      }),
    });
    // The visitor's diagnostic is computed locally and doesn't depend on this
    // notification reaching the site owner, so a Resend failure here is logged
    // for ops visibility rather than blocking the response.
    if (error) console.error("Resend send failed for /api/audit:", error);
  }

  return NextResponse.json({ ok: true, result });
}
