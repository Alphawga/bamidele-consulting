import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const STAGES = [
  "lead",
  "scorecard",
  "diagnostic_booked",
  "diagnostic_done",
  "audit_proposed",
  "audit_signed",
  "blueprint",
  "retainer",
  "lost",
];

const SOURCES = [
  "linkedin",
  "scorecard",
  "referral",
  "outreach",
  "whatsapp",
  "other",
];

export async function GET() {
  try {
    const leads = await prisma.crmLead.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        _count: { select: { activities: true } },
      },
    });
    return NextResponse.json({ leads });
  } catch (error) {
    console.error("CRM GET failed:", error);
    return NextResponse.json({ error: "Failed to load leads" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();

  if (!name) {
    return NextResponse.json({ error: "Name required" }, { status: 422 });
  }
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 422 });
  }

  const stage = STAGES.includes(String(data.stage)) ? String(data.stage) : "lead";
  const source = SOURCES.includes(String(data.source)) ? String(data.source) : "outreach";

  try {
    const lead = await prisma.crmLead.create({
      data: {
        name,
        email,
        company: data.company ? String(data.company) : null,
        whatsapp: data.whatsapp ? String(data.whatsapp) : null,
        source,
        stage,
        value: data.value ? Number(data.value) : null,
        notes: data.notes ? String(data.notes) : null,
        nextAction: data.nextAction ? String(data.nextAction) : null,
        nextActionDate: data.nextActionDate ? new Date(String(data.nextActionDate)) : null,
      },
    });
    return NextResponse.json({ lead });
  } catch (error) {
    console.error("CRM POST failed:", error);
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
  }
}
