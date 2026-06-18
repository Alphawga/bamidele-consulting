import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getCaseStudies, getBlogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = ["", "/work", "/services", "/about", "/book", "/blog", "/course"];

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const work = getCaseStudies().map((s) => ({
    url: `${base}/work/${s.slug}`,
    lastModified: s.frontmatter.date ? new Date(s.frontmatter.date) : new Date(),
  }));

  const blog = getBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.frontmatter.date ? new Date(p.frontmatter.date) : new Date(),
  }));

  return [...staticEntries, ...work, ...blog];
}
