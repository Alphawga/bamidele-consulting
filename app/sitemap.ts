import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getBlogPosts } from "@/lib/content";

// Stamping `new Date()` on every static path made the sitemap claim all sixteen
// pages changed on every deploy, which spends the lastModified signal for nothing.
// Each path carries the date its content actually last changed instead.
const STATIC_PATHS: Array<[path: string, lastModified: string]> = [
  ["", "2026-08-11"],
  ["/how-we-work", "2026-08-11"],
  ["/offers", "2026-08-11"],
  ["/okoh", "2026-08-11"],
  ["/writing", "2026-08-11"],
  ["/contact", "2026-08-11"],
  ["/about", "2026-08-11"],
  ["/scorecard", "2026-08-08"],
  ["/book", "2026-08-08"],
  ["/audit", "2026-08-08"],
  ["/alphabrain", "2026-08-08"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticEntries = STATIC_PATHS.map(([path, lastModified]) => ({
    url: `${base}${path}`,
    lastModified: new Date(lastModified),
  }));

  const blog = getBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.frontmatter.date ? new Date(p.frontmatter.date) : new Date(),
  }));

  return [...staticEntries, ...blog];
}
