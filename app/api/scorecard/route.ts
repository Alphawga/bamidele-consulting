import { NextResponse } from "next/server";
import { SECTION_WEAKNESS_NOTES, isValidScorecardAnswers, scoreScorecard } from "@/lib/scorecard";
import { prisma } from "@/lib/prisma";
import { site } from "@/lib/site";
import { buildNotificationEmail, buildScorecardResultEmail } from "@/lib/email";

const bandTone: Record<string, "forest" | "gold" | "oxblood"> = {
  Consolidated: "forest",
  "Held together by heroes": "gold",
  "Leaking daily": "oxblood",
  "Flying blind": "oxblood",
};

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

  let scorecardLead;
  try {
    scorecardLead = await prisma.scorecardLead.create({
      data: {
        name,
        email,
        whatsapp: whatsapp || null,
        totalScore: result.total,
        band: result.band.name,
        sectionScores: result.sectionScores,
        weakestSection: result.weakestSection,
      },
    });
  } catch (error) {
    console.error("Prisma insert failed for /api/scorecard:", error);
  }

  if (scorecardLead) {
    const scorecardNote = `Scorecard: ${result.total}/100 (${result.band.name}). Weakest section: ${result.weakestSection}.`;
    try {
      const existingCrmLead = await prisma.crmLead.findFirst({ where: { email } });
      if (existingCrmLead) {
        await prisma.crmActivity.create({
          data: { leadId: existingCrmLead.id, type: "scorecard", notes: `Retook scorecard. ${scorecardNote}` },
        });
      } else {
        await prisma.crmLead.create({
          data: {
            name,
            email,
            whatsapp: whatsapp || null,
            source: "scorecard",
            stage: "scorecard",
            scorecardId: scorecardLead.id,
            notes: scorecardNote,
          },
        });
      }
    } catch (error) {
      console.error("CRM lead sync failed for /api/scorecard:", error);
    }
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
      replyTo: email,
      subject: `New scorecard lead: ${result.total}/100 (${result.band.name})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `WhatsApp: ${whatsapp || "not provided"}`,
        `Score: ${result.total}/100`,
        `Band: ${result.band.name}`,
        `Weakest section: ${result.weakestSection}`,
      ].join("\n"),
      html: buildNotificationEmail({
        eyebrow: "alphawga.com / scorecard",
        title: `New scorecard lead: ${name}`,
        badge: {
          label: result.band.name,
          value: `${result.total} / 100`,
          tone: bandTone[result.band.name] ?? "oxblood",
        },
        rows: [
          { label: "Name", value: name },
          { label: "Email", value: email },
          { label: "WhatsApp", value: whatsapp || "not provided" },
          { label: "Weakest section", value: result.weakestSection },
        ],
      }),
    });
    if (error) console.error("Resend send failed for /api/scorecard:", error);

    const { error: leadEmailError } = await resend.emails.send({
      from,
      to: email,
      replyTo: notifyTo,
      subject: `Your operations score: ${result.total}/100`,
      text: [
        `${name.trim().split(/\s+/)[0]}, here is your score.`,
        ``,
        `${result.total}/100 — ${result.band.name}`,
        result.band.description,
        ``,
        ...result.sectionScores.map((s) => `${s.section}: ${s.score}/20`),
        ``,
        `Where it is worst: ${result.weakestSection}`,
        SECTION_WEAKNESS_NOTES[result.weakestSection] ?? "",
        ``,
        `A score tells you which part of the operation is worst. It does not tell you what that part is costing you every month, and that is the number worth having.`,
        `That is what the diagnostic call is for. Forty-five minutes, and we take ${result.weakestSection.toLowerCase()} apart until one leak has a naira figure on it that you can go and check yourself. It costs \u20a610,000, and it comes off the price of a full audit if you decide to do one.`,
        ``,
        `Book it here: ${site.url}/book`,
      ].join("\n"),
      html: buildScorecardResultEmail({
        name,
        total: result.total,
        bandName: result.band.name,
        bandDescription: result.band.description,
        weakestSection: result.weakestSection,
        weakestNote: SECTION_WEAKNESS_NOTES[result.weakestSection] ?? "",
        sectionScores: result.sectionScores,
        bookUrl: `${site.url}/book`,
      }),
    });
    if (leadEmailError) console.error("Resend lead send failed for /api/scorecard:", leadEmailError);
  }

  return NextResponse.json({ ok: true, result });
}
