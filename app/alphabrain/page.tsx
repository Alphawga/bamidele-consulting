import type { Metadata } from "next";
import AlphaBrainPage from "@/components/asoOke/AlphaBrainPage";

export const metadata: Metadata = {
  alternates: { canonical: "/alphabrain" },
  title: { absolute: "AlphaWGA · AlphaBrain" },
  description:
    "The operating system I run my own week on. It pushes the work at me instead of waiting to be opened. Join the waitlist.",
};

export default function Page() {
  return <AlphaBrainPage />;
}
