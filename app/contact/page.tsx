import type { Metadata } from "next";
import ContactPage from "@/components/asoOke/ContactPage";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: { absolute: "AlphaWGA · Contact" },
  description: "Bring one operational bottleneck. Discuss how work moves before deciding what needs to change.",
};

export default function Page() {
  return <ContactPage />;
}
