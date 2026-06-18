import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { getInsights, getInsight } from "@/lib/content";

export function generateStaticParams() {
  return getInsights().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getInsight(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
  };
}

export default function Insight({ params }: { params: { slug: string } }) {
  const post = getInsight(params.slug);
  if (!post) notFound();

  return (
    <Section>
      <Link href="/insights" className="font-mono text-xs text-muted hover:text-ink">
        ← Insights
      </Link>
      <h1 className="mt-8 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight">
        {post.frontmatter.title}
      </h1>
      {post.frontmatter.date ? (
        <p className="mt-3 font-mono text-xs text-muted">{post.frontmatter.date}</p>
      ) : null}
      <div className="mt-10 max-w-2xl">
        <Prose>
          <MDXRemote source={post.content} />
        </Prose>
      </div>
    </Section>
  );
}
