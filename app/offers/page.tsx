import type { Metadata } from "next";
import OffersPage from "@/components/asoOke/OffersPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Offers" },
  description:
    "A business that runs without you. Four steps: the ₦10K Diagnostic Call, the Systems Audit, the Consolidation Blueprint, and the Systems Advisor.",
};

export default function Page() {
  return <OffersPage />;
}
