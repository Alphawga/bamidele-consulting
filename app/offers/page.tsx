import type { Metadata } from "next";
import OffersPage from "@/components/asoOke/OffersPage";

export const metadata: Metadata = {
  alternates: { canonical: "/offers" },
  title: { absolute: "AlphaWGA · Offers" },
  description:
    "AlphaWGA starts by understanding the operation, then scopes the right process, systems or technology intervention when a material problem is established.",
};

export default function Page() {
  return <OffersPage />;
}
