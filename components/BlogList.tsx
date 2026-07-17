"use client";

import { useState } from "react";
import Link from "next/link";
import type { Doc } from "@/lib/content";

type Props = {
  posts: Doc[];
  categories: string[];
};

export default function BlogList({ posts, categories }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? posts.filter((p) => p.frontmatter.category === active) : posts;

  return (
    <div className="mt-10">
      {categories.length > 1 ? (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={
              active === null
                ? "rounded-full bg-accent px-3 py-1.5 font-mono text-xs uppercase tracking-label text-paper"
                : "rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-label text-muted hover:text-ink"
            }
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={
                active === c
                  ? "rounded-full bg-accent px-3 py-1.5 font-mono text-xs uppercase tracking-label text-paper"
                  : "rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-label text-muted hover:text-ink"
              }
            >
              {c}
            </button>
          ))}
        </div>
      ) : null}

      {visible.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-line p-10 text-center">
          <p className="label">Nothing here yet</p>
          <p className="mt-3 text-muted">Check back shortly, or view another category.</p>
        </div>
      ) : (
        <div className="mt-8 divide-y divide-line border-y border-line">
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-label text-accent">
                  {p.frontmatter.category}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold group-hover:text-accent">
                  {p.frontmatter.title}
                </h2>
                <p className="mt-1 max-w-xl text-muted">{p.frontmatter.excerpt}</p>
              </div>
              <span className="whitespace-nowrap font-mono text-xs text-muted">
                {[p.frontmatter.date, p.frontmatter.readTime].filter(Boolean).join(" · ")}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
