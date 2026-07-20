import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const scorecardLeads = await prisma.scorecardLead.findMany({
      where: {
        email: {
          notIn: await prisma.crmLead
            .findMany({ select: { email: true } })
            .then((rows) => rows.map((r) => r.email)),
        },
      },
    });

    const created = await prisma.$transaction(
      scorecardLeads.map((lead) =>
        prisma.crmLead.create({
          data: {
            name: lead.name,
            email: lead.email,
            whatsapp: lead.whatsapp,
            source: "scorecard",
            stage: "scorecard",
            scorecardId: lead.id,
            notes: `Scorecard: ${lead.totalScore}/100 (${lead.band}). Weakest section: ${lead.weakestSection}.`,
          },
        })
      )
    );

    return NextResponse.json({ imported: created.length });
  } catch (error) {
    console.error("Backfill failed:", error);
    return NextResponse.json({ error: "Backfill failed" }, { status: 500 });
  }
}
