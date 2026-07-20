-- CreateTable
CREATE TABLE "crm_leads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT,
    "source" TEXT NOT NULL DEFAULT 'outreach',
    "stage" TEXT NOT NULL DEFAULT 'lead',
    "value" INTEGER,
    "scorecardId" TEXT,
    "lastContactDate" TIMESTAMP(3),
    "nextAction" TEXT,
    "nextActionDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "crm_leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crm_activities" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "crm_activities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "crm_leads_scorecardId_key" ON "crm_leads"("scorecardId");

-- AddForeignKey
ALTER TABLE "crm_activities" ADD CONSTRAINT "crm_activities_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "crm_leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
