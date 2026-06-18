import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import { getInsights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on consolidating operations, from real builds and client work.",
};

export default function InsightsIndex() {
  const posts = getInsights();
  return (
    <Section>
      <SectionLabel index="I">Insights</SectionLabel>
      <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
        Notes from the work.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        What I learn building and running these systems. Drawn from real operations,
        not theory.
      </p>

      {posts.length === 0 ? (
        <div className="mt-12 rounded-md border border-dashed border-line p-10 text-center">
          <p className="label">Coming soon</p>
          <p className="mt-3 text-muted">
            First pieces are being written. Check back shortly.
          </p>
        </div>
      ) : (
        <div className="mt-12 divide-y divide-line border-y border-line">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/insights/${p.slug}`}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h2 className="font-display text-xl font-bold group-hover:text-accent">
                  {p.frontmatter.title}
                </h2>
                <p className="mt-1 max-w-xl text-muted">{p.frontmatter.summary}</p>
              </div>
              {p.frontmatter.date ? (
                <span className="font-mono text-xs text-muted">
                  {p.frontmatter.date}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
