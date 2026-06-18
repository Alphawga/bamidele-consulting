import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Course",
  description: "An AI automation course, launching later this year.",
};

export default function Course() {
  return (
    <Section>
      <SectionLabel index="C">Course</SectionLabel>
      <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
        An AI automation course is coming later this year.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Practical automation for people who run real operations. Details soon.
      </p>
      <div className="mt-10 rounded-md border border-dashed border-line p-10">
        <p className="label">In progress</p>
        <p className="mt-3 max-w-lg text-muted">
          [TO FILL: short description, what it covers, and a way to join the waitlist.]
        </p>
      </div>
    </Section>
  );
}
