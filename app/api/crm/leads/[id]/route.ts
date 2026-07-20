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

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    const lead = await prisma.crmLead.findUnique({
      where: { id: params.id },
      include: { activities: { orderBy: { createdAt: "desc" } } },
    });
    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }
    return NextResponse.json({ lead });
  } catch (error) {
    console.error("CRM lead GET failed:", error);
    return NextResponse.json({ error: "Failed to load lead" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const update: Record<string, unknown> = {};

  if (data.name !== undefined) update.name = String(data.name).trim();
  if (data.email !== undefined) update.email = String(data.email).trim();
  if (data.company !== undefined) update.company = data.company ? String(data.company) : null;
  if (data.whatsapp !== undefined) update.whatsapp = data.whatsapp ? String(data.whatsapp) : null;
  if (data.source !== undefined) {
    update.source = SOURCES.includes(String(data.source)) ? String(data.source) : "outreach";
  }
  if (data.stage !== undefined) {
    update.stage = STAGES.includes(String(data.stage)) ? String(data.stage) : "lead";
  }
  if (data.value !== undefined) update.value = data.value ? Number(data.value) : null;
  if (data.notes !== undefined) update.notes = data.notes ? String(data.notes) : null;
  if (data.nextAction !== undefined) update.nextAction = data.nextAction ? String(data.nextAction) : null;
  if (data.nextActionDate !== undefined) {
    update.nextActionDate = data.nextActionDate ? new Date(String(data.nextActionDate)) : null;
  }
  if (data.lastContactDate !== undefined) {
    update.lastContactDate = data.lastContactDate ? new Date(String(data.lastContactDate)) : null;
  }

  try {
    const lead = await prisma.crmLead.update({
      where: { id: params.id },
      data: update,
    });
    return NextResponse.json({ lead });
  } catch (error) {
    console.error("CRM PATCH failed:", error);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.crmLead.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CRM DELETE failed:", error);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}
