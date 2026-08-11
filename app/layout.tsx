import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono, Bricolage_Grotesque, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import ChromeGate from "@/components/nav/ChromeGate";
import StructuredData from "@/components/StructuredData";
import { site } from "@/lib/site";
import { alphawga } from "@/lib/alphawga";

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

// preload:false, not a nested layout: these two are declared here for the
// pre-AlphaWGA routes, but no Aso-Oke page styles anything with them, and a
// preload link forces the download on every route regardless. Dropping the
// link takes them off the critical path for the Aso-Oke pages (all the
// LinkedIn traffic) while the routes that do render Fraunces still get it,
// discovered from CSS and swapped in. Scoping by layout instead would have
// broken /book, an Aso-Oke page whose AuditFlow uses font-display.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
  display: "swap",
  preload: false,
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
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
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — One intelligent system for your operation`,
    template: `%s — ${site.name}`,
  },
  description:
    "AlphaWGA consolidates scattered business operations into one intelligent system. For Nigerian business owners running on QuickBooks, spreadsheets, and WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${alphawga.name} — Woven, not patched`,
    description: site.tagline,
    url: "/",
    siteName: alphawga.name,
    type: "website",
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
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
        <StructuredData />
        <ChromeGate>{children}</ChromeGate>
        <Analytics />
        {clarityProjectId ? (
          <Script id="clarity-tag" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
