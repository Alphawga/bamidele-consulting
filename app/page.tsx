import type { Metadata } from "next";
import AsoOkeHome from "@/components/homepage/AsoOkeHome";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s — Bamidele Ajibola" title
  // template (that old-brand suffix is still correct for the pre-AlphaWGA
  // routes the template serves, but wrong for every Aso-Oke page).
  title: { absolute: "AlphaWGA — Woven, not patched" },
  description:
    "AlphaWGA consolidates scattered business operations into one intelligent system. Business systems and operational control for Nigerian businesses where the owner still personally controls quotations, purchasing, invoicing, inventory or approvals.",
};

export default function Home() {
  return <AsoOkeHome />;
}
