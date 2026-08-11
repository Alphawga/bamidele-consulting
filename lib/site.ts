import { alphawga } from "./alphawga";

export const site = {
  name: "Bamidele Ajibola",
  role: "Full-stack developer, Lagos",
  tagline: "I consolidate scattered business operations into one intelligent system.",
  // www, not the apex: Vercel serves www as primary and 308s the apex to it, so an
  // apex value here puts every sitemap URL, canonical and og:url behind a redirect,
  // which Google files as "Page with redirect" and never indexes.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alphawga.com",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  email: alphawga.email,
};

export const nav = [
  { href: "/okoh", label: "Okoh" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/mentorship", label: "Mentorship" },
];
