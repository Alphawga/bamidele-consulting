import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import BookButton from "@/components/BookButton";
import { getCaseStudies, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return getCaseStudies().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: study.frontmatter.title,
    description: study.frontmatter.summary,
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <>
      <Section className="!pb-8">
        <Link
          href="/work"
          className="font-mono text-xs text-muted hover:text-ink"
        >
          ← Work
        </Link>
        {study.frontmatter.client ? (
          <p className="label mt-8">{study.frontmatter.client}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight">
          {study.frontmatter.title}
        </h1>
        {study.frontmatter.outcome ? (
          <p className="mt-6 max-w-2xl font-display text-xl font-bold text-accent">
            {study.frontmatter.outcome}
          </p>
        ) : null}
      </Section>

      <Section className="!pt-4">
        <div className="max-w-2xl">
          <Prose>
            <MDXRemote source={study.content} />
          </Prose>
        </div>
        <div className="mt-16 max-w-2xl rounded-md border border-line bg-ink px-8 py-10 text-paper">
          <h2 className="font-display text-2xl font-bold">
            Your operation, one system.
          </h2>
          <p className="mt-3 text-paper/70">
            A short call to see if it is a fit. No pressure.
          </p>
          <div className="mt-6">
            <BookButton />
          </div>
        </div>
      </Section>
    </>
  );
}
