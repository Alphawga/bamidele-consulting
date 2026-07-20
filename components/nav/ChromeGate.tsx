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

// Internal admin tool: owns its own full-width header, no public site chrome.
const BARE_PREFIXES = ["/admin"];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = BARE_PATHS.has(pathname) || BARE_PREFIXES.some((p) => pathname.startsWith(p));

  if (bare) return <main>{children}</main>;

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
