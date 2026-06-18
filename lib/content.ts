import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Frontmatter = {
  title: string;
  summary: string;
  date?: string;
  client?: string;
  outcome?: string;
  draft?: boolean;
};

export type Doc = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
};

const root = path.join(process.cwd(), "content");

function readCollection(dir: string): Doc[] {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(full, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        frontmatter: data as Frontmatter,
        content,
      };
    })
    .filter((doc) => !doc.frontmatter.draft)
    .sort((a, b) =>
      (b.frontmatter.date ?? "").localeCompare(a.frontmatter.date ?? "")
    );
}

function readOne(dir: string, slug: string): Doc | null {
  return readCollection(dir).find((d) => d.slug === slug) ?? null;
}

export const getCaseStudies = () => readCollection("case-studies");
export const getCaseStudy = (slug: string) => readOne("case-studies", slug);
export const getInsights = () => readCollection("insights");
export const getInsight = (slug: string) => readOne("insights", slug);
