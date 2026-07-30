import type { Metadata } from "next";
import BookPage from "@/components/asoOke/BookPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Book" },
  description: "Book the ₦10,000 diagnostic call. Pay, then pick a time.",
};

export default function Page() {
  return <BookPage />;
}
