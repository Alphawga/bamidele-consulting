import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono, Bricolage_Grotesque, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ChromeGate from "@/components/nav/ChromeGate";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
// Aso-Oke typefaces — scoped via CSS var, consumed by AsoOkeHome.module.css
// and the shared components/asoOke/AsoOkeShell.module.css.
const asoDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-aso-display",
  display: "swap",
});
const asoBody = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-aso-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — One intelligent system for your operation`,
    template: `%s — ${site.name}`,
  },
  description:
    "I consolidate scattered business operations into one intelligent system. For Nigerian business owners running on QuickBooks, spreadsheets, and WhatsApp.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} ${asoDisplay.variable} ${asoBody.variable}`}
    >
      <body className="min-h-screen">
        <ChromeGate>{children}</ChromeGate>
        <Analytics />
      </body>
    </html>
  );
}
