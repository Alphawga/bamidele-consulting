import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import BookButton from "@/components/BookButton";
import { getBlogPosts, getBlogPost } from "@/lib/content";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <Section>
      <Link href="/blog" className="font-mono text-xs text-muted hover:text-ink">
        ← Blog
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
      <div className="mt-16 max-w-2xl rounded-md border border-line bg-ink px-8 py-10 text-paper">
        <h2 className="font-display text-2xl font-bold">
          Want this for your operation?
        </h2>
        <p className="mt-3 text-paper/70">
          A short call to see if it is a fit. No pressure.
        </p>
        <div className="mt-6">
          <BookButton />
        </div>
      </div>
    </Section>
  );
}
