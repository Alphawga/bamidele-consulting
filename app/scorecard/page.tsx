import type { Metadata } from "next";
import ScorecardPage from "@/components/asoOke/ScorecardPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Operations Self-Audit Scorecard" },
  description: "Twenty questions, five leak points, ten minutes. Find where your operation is bleeding money before you spend a naira.",
  openGraph: {
    title: "Operations Self-Audit Scorecard",
    description: "20 questions, 5 sections, 10 minutes. Find out which part of your operation is leaking money. Free.",
    url: "/scorecard",
    images: [{ url: "/images/featured-scorecard.png", width: 2160, height: 2160 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/featured-scorecard.png"],
  },
};

export default function Page() {
  return <ScorecardPage />;
}
