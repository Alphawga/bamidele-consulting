import type { Metadata } from "next";
import ContactPage from "@/components/asoOke/ContactPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Contact" },
  description: "Bring the tangle, leave with a thread. Book the ₦10K diagnostic call or send a plain email.",
};

export default function Page() {
  return <ContactPage />;
}
