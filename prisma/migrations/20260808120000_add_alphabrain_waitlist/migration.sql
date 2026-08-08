-- CreateTable
CREATE TABLE "alphabrain_waitlist" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "slipping" TEXT,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alphabrain_waitlist_pkey" PRIMARY KEY ("id")
);
