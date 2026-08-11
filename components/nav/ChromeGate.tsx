"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import Footer from "@/components/Footer";

// Aso-Oke pages mount their own AsoOkeNav/AsoOkeFooter. Anything listed here that
// does not would lose its nav; anything mounting its own that is NOT listed here
// renders two of them, which is what /alphabrain was doing.
const BARE_PATHS = new Set([
  "/",
  "/how-we-work",
  "/okoh",
  "/about",
  "/offers",
  "/products",
  "/writing",
  "/contact",
  "/scorecard",
  "/book",
  "/alphabrain",
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
