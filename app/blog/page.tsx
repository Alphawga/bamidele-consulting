import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import BlogList from "@/components/BlogList";
import { getBlogPosts, getBlogCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes on consolidating operations, from real builds and client work.",
};

export default function BlogIndex() {
  const posts = getBlogPosts();
  const categories = getBlogCategories();

  if (posts.length === 0) {
    return (
      <Section>
        <SectionLabel index="B">Blog</SectionLabel>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
          Notes from the work.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          What I learn building and running these systems. Drawn from real operations,
          not theory.
        </p>
        <div className="mt-12 rounded-lg border border-dashed border-line p-10 text-center">
          <p className="label">Coming soon</p>
          <p className="mt-3 text-muted">
            First pieces are being written. Check back shortly.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <SectionLabel index="B">Blog</SectionLabel>
      <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
        Notes from the work.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        What I learn building and running these systems. Drawn from real operations,
        not theory.
      </p>
      <BlogList posts={posts} categories={categories} />
    </Section>
  );
}
