import type { Metadata } from "next";
import OffersPage from "@/components/asoOke/OffersPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Offers" },
  description:
    "A business that runs without you. It starts with a free 20-minute read, then the Operations Diagnostic, the Consolidation Blueprint, and the Systems Advisor.",
};

export default function Page() {
  return <OffersPage />;
}
