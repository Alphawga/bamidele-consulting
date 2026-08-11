import type { Metadata } from "next";
import BookPage from "@/components/asoOke/BookPage";

export const metadata: Metadata = {
  alternates: { canonical: "/book" },
  title: { absolute: "AlphaWGA · Book" },
  description: "Book a free 20-minute read of your operations. No payment, just pick a time.",
  openGraph: {
    title: "Book a free 20-minute read",
    description: "Twenty minutes. We find where sales, stock and cash stop agreeing, and what to look at first. No charge.",
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
