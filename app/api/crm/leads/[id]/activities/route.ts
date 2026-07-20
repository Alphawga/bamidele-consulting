import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const ACTIVITY_TYPES = ["call", "dm", "email", "meeting", "note", "scorecard"];

export async function POST(req: Request, { params }: { params: { id: string } }) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const notes = String(data.notes || "").trim();
  if (!notes) {
    return NextResponse.json({ error: "Activity notes required" }, { status: 422 });
  }

  const type = ACTIVITY_TYPES.includes(String(data.type)) ? String(data.type) : "note";

  try {
    const [activity] = await prisma.$transaction([
      prisma.crmActivity.create({
        data: {
          leadId: params.id,
          type,
          notes,
        },
      }),
      prisma.crmLead.update({
        where: { id: params.id },
        data: { lastContactDate: new Date() },
      }),
    ]);
    return NextResponse.json({ activity });
  } catch (error) {
    console.error("CRM activity POST failed:", error);
    return NextResponse.json({ error: "Failed to add activity" }, { status: 500 });
  }
}
