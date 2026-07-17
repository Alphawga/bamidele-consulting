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
    description: post.frontmatter.excerpt,
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
      <p className="mt-8 font-mono text-xs uppercase tracking-label text-accent">
        {post.frontmatter.category}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight">
        {post.frontmatter.title}
      </h1>
      <p className="mt-3 font-mono text-xs text-muted">
        {post.frontmatter.author ?? "Bamidele Ajibola"}
        {post.frontmatter.date ? ` · ${post.frontmatter.date}` : ""}
        {post.frontmatter.readTime ? ` · ${post.frontmatter.readTime}` : ""}
      </p>
      <div className="mt-10 max-w-2xl">
        <Prose>
          <MDXRemote source={post.content} />
        </Prose>
      </div>
      <div className="mt-16 max-w-2xl rounded-lg border border-line bg-paper-card-elevated px-8 py-10">
        <h2 className="font-display text-2xl font-bold">
          Where does your operation stand?
        </h2>
        <p className="mt-3 text-muted">
          Take the free audit and get a diagnostic built from your actual answers.
        </p>
        <div className="mt-6">
          <BookButton />
        </div>
      </div>
    </Section>
  );
}
