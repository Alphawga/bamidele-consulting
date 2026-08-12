import type { Metadata } from "next";
import BookPage from "@/components/asoOke/BookPage";

export const metadata: Metadata = {
  alternates: { canonical: "/book" },
  title: { absolute: "AlphaWGA · Book" },
  description: "Discuss one operational bottleneck with AlphaWGA. Start with how the work moves before deciding what to fix.",
  openGraph: {
    title: "Discuss an operational bottleneck",
    description: "Start with one real workflow. Understand where work, money and information break down before deciding what to fix.",
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
