import type { Metadata } from "next";
import ProductsPage from "@/components/asoOke/ProductsPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Products" },
  description:
    "Okoh ERP: already running a real procurement operation. Now being built for yours. Join the waitlist.",
};

export default function Page() {
  return <ProductsPage />;
}
