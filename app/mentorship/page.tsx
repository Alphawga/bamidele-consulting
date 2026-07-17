import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentorship",
  description: "NDI facilitation and developer mentoring.",
};

export default function Mentorship() {
  return (
    <Section>
      <SectionLabel index="00">Mentorship</SectionLabel>
      <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
        Mentoring developers, and facilitating for NDI.
      </h1>
      <div className="mt-6 max-w-xl space-y-4 text-lg text-muted">
        <p>
          I have mentored 20+ developers, mostly on the same thing this whole site is
          about: building things that hold up under real use, not just demos.
        </p>
        <p>
          I also facilitate for NDI. [TO FILL: specifics on the program and what it
          covers.]
        </p>
        <p>
          This isn&apos;t a program with a sales page. If you&apos;re a developer looking
          for mentorship, or want to talk about NDI facilitation, email{" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:text-accent-ink">
            {site.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
