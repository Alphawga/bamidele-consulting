import type { Metadata } from "next";
import AsoOkeHome from "@/components/homepage/AsoOkeHome";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s — Bamidele Ajibola" title
  // template (that old-brand suffix is still correct for the pre-AlphaWGA
  // routes the template serves, but wrong for every Aso-Oke page).
  title: { absolute: "AlphaWGA — Woven, not patched" },
  description:
    "AlphaWGA consolidates scattered business operations into one intelligent system. Consolidation advisory for Nigerian procurement, supply chain and oil and gas service companies.",
};

export default function Home() {
  return <AsoOkeHome />;
}
