import type { Metadata } from "next";
import OkohPage from "@/components/asoOke/OkohPage";


export const metadata: Metadata = {
  title: "Okoh Case Study | AlphaWGA",
  description:
    "How four years inside a live procurement operation shaped an operational system across purchasing, orders, inventory, invoicing and more.",

  alternates: {
    canonical: "https://www.alphawga.com/okoh",
  },

  openGraph: {
    title: "Okoh: Four Years Inside a Live Procurement Operation",
    description:
      "How understanding the operation came before designing the software.",
    url: "https://www.alphawga.com/okoh",
    type: "article",
    images: [
      {
        url: "https://www.alphawga.com/images/okoh-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Okoh case study by AlphaWGA",
      },
    ],
  },
};
export default function Page() {
  return <OkohPage />;
}
