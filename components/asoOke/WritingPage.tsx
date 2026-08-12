import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import TrackedCta from "./TrackedCta";
import { alphawga } from "@/lib/alphawga";
import { getBlogPosts } from "@/lib/content";
import shell from "./AsoOkeShell.module.css";
import styles from "./WritingPage.module.css";

const CATEGORY_COLOR: Record<string, string> = {
  "Procurement & Operations": "var(--oxblood)",
  "Building & Creativity": "var(--forest)",
};

function formatDate(date?: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export default function WritingPage() {
  const posts = getBlogPosts();

  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Writing
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>Notes from the loom.</h1>
        <p className={`${styles.lede} ${shell.rise} ${shell.riseC}`}>
          On systems, discipline, partnerships, and finding the opportunity inside the problem.
          Written slowly, between builds.
        </p>
      </header>

      <section className={styles.list}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.row}>
            <div className={styles.rowHead}>
              <span
                className={styles.tag}
                style={{ color: CATEGORY_COLOR[post.frontmatter.category] ?? "var(--gold)" }}
              >
                {post.frontmatter.category}
              </span>
              <span className={styles.date}>{formatDate(post.frontmatter.date)}</span>
            </div>
            <h2 className={styles.title}>{post.frontmatter.title}</h2>
            <p className={styles.teaser}>{post.frontmatter.excerpt}</p>
          </Link>
        ))}
        <div className={styles.rule} />
        <p className={styles.footnote}>New notes land here first · no newsletter noise</p>
        <p className={styles.closingCta}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            event="diagnostic_cta_click"
            data={{ location: "writing_closing" }}
          >
            Or discuss an operational bottleneck →
          </TrackedCta>
        </p>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
