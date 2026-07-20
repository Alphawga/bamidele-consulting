-- CreateTable
CREATE TABLE "audit_payments" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amountKobo" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "answers" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "audit_payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "audit_payments_reference_key" ON "audit_payments"("reference");
