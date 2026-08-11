import type { Metadata } from "next";
import OffersPage from "@/components/asoOke/OffersPage";

export const metadata: Metadata = {
  alternates: { canonical: "/offers" },
  title: { absolute: "AlphaWGA · Offers" },
  description:
    "A business that runs without you. It starts with a free 20-minute read, then the Operational Control Diagnostic, the Consolidation Blueprint, the Consolidation Build, and the Systems Advisor.",
};

export default function Page() {
  return <OffersPage />;
}
