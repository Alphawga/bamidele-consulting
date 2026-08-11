import type { Metadata } from "next";
import HowWeWorkPage from "@/components/asoOke/HowWeWorkPage";

export const metadata: Metadata = {
  alternates: { canonical: "/how-we-work" },
  title: { absolute: "AlphaWGA · How we work" },
  description:
    "Before you buy more software, understand how the business actually runs. The seven things an operational control diagnostic looks at, and what a week of one looks like.",
};

export default function Page() {
  return <HowWeWorkPage />;
}
