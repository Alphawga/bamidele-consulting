import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getBlogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = ["", "/okoh", "/audit", "/about", "/blog", "/mentorship"];

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const blog = getBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.frontmatter.date ? new Date(p.frontmatter.date) : new Date(),
  }));

  return [...staticEntries, ...blog];
}
