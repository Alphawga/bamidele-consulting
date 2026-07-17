import type { Metadata } from "next";
import WritingPage from "@/components/asoOke/WritingPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Writing" },
  description: "Notes on systems, discipline, partnerships, and finding the opportunity inside the problem.",
};

export default function Page() {
  return <WritingPage />;
}
