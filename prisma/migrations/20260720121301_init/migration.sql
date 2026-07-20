-- CreateTable
CREATE TABLE "erp_waitlist" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "teamSize" TEXT NOT NULL,
    "currentTooling" TEXT,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "erp_waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scorecard_leads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT,
    "totalScore" INTEGER NOT NULL,
    "band" TEXT NOT NULL,
    "sectionScores" JSONB NOT NULL,
    "weakestSection" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'scorecard',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scorecard_leads_pkey" PRIMARY KEY ("id")
);
