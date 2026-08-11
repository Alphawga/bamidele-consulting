import { alphawga } from "./alphawga";

// Vercel serves www as primary and 308s the apex to it. An apex value anywhere in
// the metadata puts every sitemap URL, canonical and og:url behind a redirect,
// which Search Console files as "Page with redirect" and never indexes. That cost
// the site its entire index through 2026-08, from one environment variable.
//
// So the canonical host is not a knob. Whatever the env supplies gets normalised
// onto the www host before anything renders it. Previews and localhost pass through
// untouched.
const CANONICAL_HOST = "https://www.alphawga.com";

function canonicalUrl(raw: string | undefined): string {
  if (!raw) return CANONICAL_HOST;
  try {
    const url = new URL(raw);
    if (url.hostname === "alphawga.com") return CANONICAL_HOST;
    return raw.replace(/\/$/, "");
  } catch {
    return CANONICAL_HOST;
  }
}

export const site = {
  name: "Bamidele Ajibola",
  role: "Full-stack developer, Lagos",
  tagline: "I consolidate scattered business operations into one intelligent system.",
  url: canonicalUrl(process.env.NEXT_PUBLIC_SITE_URL),
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  email: alphawga.email,
};

export const nav = [
  { href: "/okoh", label: "Okoh" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/mentorship", label: "Mentorship" },
];
