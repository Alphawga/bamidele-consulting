"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import Footer from "@/components/Footer";

const BARE_PATHS = new Set([
  "/",
  "/offers",
  "/products",
  "/writing",
  "/contact",
  "/scorecard",
]);

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const bare = BARE_PATHS.has(usePathname());

  if (bare) return <main>{children}</main>;

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
