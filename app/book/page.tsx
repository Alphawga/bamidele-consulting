import type { Metadata } from "next";
import BookPage from "@/components/asoOke/BookPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Book" },
  description: "Book the ₦10,000 diagnostic call. Pay, then pick a time.",
  openGraph: {
    title: "Book a Diagnostic Call",
    description: "One 45-minute call. We trace where sales, stock and cash stop agreeing, and what to fix first. ₦10,000, credited toward your audit.",
    url: "/book",
    images: [{ url: "/images/featured-diagnostic.png", width: 2160, height: 2160 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/featured-diagnostic.png"],
  },
};

export default function Page() {
  return <BookPage />;
}
