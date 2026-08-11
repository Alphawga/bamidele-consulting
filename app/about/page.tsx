import type { Metadata } from "next";
import AboutPage from "@/components/asoOke/AboutPage";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: { absolute: "AlphaWGA · About Bamidele Ajibola" },
  description:
    "Eight years writing software, four of them inside one Lagos procurement business. Why AlphaWGA starts with the diagnosis instead of the build.",
};

export default function Page() {
  return <AboutPage />;
}
