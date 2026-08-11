import type { Metadata } from "next";
import OkohPage from "@/components/asoOke/OkohPage";

export const metadata: Metadata = {
  alternates: { canonical: "/okoh" },
  title: { absolute: "AlphaWGA · The Okoh build" },
  description:
    "A Lagos procurement and supply operation moved off five disconnected tools onto one system. Four years later the same client came back and bought the second version.",
};

export default function Page() {
  return <OkohPage />;
}
