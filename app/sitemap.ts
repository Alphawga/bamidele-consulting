import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getCaseStudies, getInsights } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = ["", "/work", "/services", "/about", "/book", "/insights", "/course"];

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const work = getCaseStudies().map((s) => ({
    url: `${base}/work/${s.slug}`,
    lastModified: s.frontmatter.date ? new Date(s.frontmatter.date) : new Date(),
  }));

  const insights = getInsights().map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: p.frontmatter.date ? new Date(p.frontmatter.date) : new Date(),
  }));

  return [...staticEntries, ...work, ...insights];
}
