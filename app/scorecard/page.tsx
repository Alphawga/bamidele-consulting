import type { Metadata } from "next";
import ScorecardPage from "@/components/asoOke/ScorecardPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Operations Self-Audit Scorecard" },
  description: "Twenty questions, five leak points, ten minutes. Find where your operation is bleeding money before you spend a naira.",
};

export default function Page() {
  return <ScorecardPage />;
}
