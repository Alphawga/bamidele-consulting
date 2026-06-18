import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import BookButton from "@/components/BookButton";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies. How scattered operations became one connected system.",
};

export default function WorkIndex() {
  const studies = getCaseStudies();
  return (
    <>
      <Section>
        <SectionLabel index="W">Work</SectionLabel>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
          The proof, told as the story of one operation at a time.
        </h1>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {studies.map((s) => (
            <Link
              key={s.slug}
              href={`/work/${s.slug}`}
              className="group bg-paper p-8 transition-colors hover:bg-paper/60"
            >
              {s.frontmatter.client ? (
                <p className="label">{s.frontmatter.client}</p>
              ) : null}
              <h2 className="mt-3 font-display text-2xl font-bold group-hover:text-accent">
                {s.frontmatter.title}
              </h2>
              <p className="mt-3 text-muted">{s.frontmatter.summary}</p>
              <p className="mt-6 text-sm text-accent">Read the case study →</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-md border border-line bg-ink px-8 py-12 text-center text-paper">
          <h2 className="font-display text-2xl font-bold">
            Want this for your operation?
          </h2>
          <div className="mt-6 flex justify-center">
            <BookButton />
          </div>
        </div>
      </Section>
    </>
  );
}
