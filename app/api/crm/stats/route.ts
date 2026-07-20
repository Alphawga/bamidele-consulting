import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [
      totalLeads,
      scorecard,
      diagnosticBooked,
      diagnosticDone,
      auditProposed,
      auditSigned,
      blueprint,
      retainer,
      lost,
      totalValue,
    ] = await Promise.all([
      prisma.crmLead.count(),
      prisma.crmLead.count({ where: { stage: "scorecard" } }),
      prisma.crmLead.count({ where: { stage: "diagnostic_booked" } }),
      prisma.crmLead.count({ where: { stage: "diagnostic_done" } }),
      prisma.crmLead.count({ where: { stage: "audit_proposed" } }),
      prisma.crmLead.count({ where: { stage: "audit_signed" } }),
      prisma.crmLead.count({ where: { stage: "blueprint" } }),
      prisma.crmLead.count({ where: { stage: "retainer" } }),
      prisma.crmLead.count({ where: { stage: "lost" } }),
      prisma.crmLead.aggregate({ _sum: { value: true }, where: { stage: { not: "lost" } } }),
    ]);

    return NextResponse.json({
      stats: {
        totalLeads,
        scorecard,
        diagnosticBooked,
        diagnosticDone,
        auditProposed,
        auditSigned,
        blueprint,
        retainer,
        lost,
        pipelineValue: totalValue._sum.value ?? 0,
      },
    });
  } catch (error) {
    console.error("CRM stats failed:", error);
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}
