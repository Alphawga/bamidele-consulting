import { NextResponse } from "next/server";
import { isValidScorecardAnswers, scoreScorecard } from "@/lib/scorecard";
import { getSupabase } from "@/lib/supabase";

type Payload = {
  name?: string;
  email?: string;
  whatsapp?: string;
  answers?: unknown;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, whatsapp, answers } = data;
  if (!name?.trim()) {
    return NextResponse.json({ error: "Full name required" }, { status: 422 });
  }
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 422 });
  }
  if (!answers || !isValidScorecardAnswers(answers)) {
    return NextResponse.json({ error: "Missing or invalid answers" }, { status: 422 });
  }

  const result = scoreScorecard(answers);

  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from("scorecard_leads").insert({
      name,
      email,
      whatsapp: whatsapp || null,
      total_score: result.total,
      band: result.band.name,
      section_scores: result.sectionScores,
      source: "scorecard",
    });
    if (error) console.error("Supabase insert failed for /api/scorecard:", error);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL ?? "site@example.com";
    const notifyTo =
      process.env.SCORECARD_NOTIFY_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? "hello@example.com";

    const { error } = await resend.emails.send({
      from,
      to: notifyTo,
      subject: `New scorecard lead: ${result.total}/100 (${result.band.name})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `WhatsApp: ${whatsapp || "not provided"}`,
        `Score: ${result.total}/100`,
        `Band: ${result.band.name}`,
        `Weakest section: ${result.weakestSection}`,
      ].join("\n"),
    });
    if (error) console.error("Resend send failed for /api/scorecard:", error);
  }

  return NextResponse.json({ ok: true, result });
}
