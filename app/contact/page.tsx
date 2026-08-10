import type { Metadata } from "next";
import ContactPage from "@/components/asoOke/ContactPage";

export const metadata: Metadata = {
  title: { absolute: "AlphaWGA · Contact" },
  description: "Bring the tangle, leave with a thread. Book a free 20-minute read or send a plain email.",
};

export default function Page() {
  return <ContactPage />;
}
