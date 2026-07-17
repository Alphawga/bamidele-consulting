import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import AuditFlow from "@/components/AuditFlow";

export const metadata: Metadata = {
  title: "Free operations audit",
  description:
    "Six questions about how your business runs today. Get a diagnostic back, then decide if a paid call makes sense.",
};

export default function Audit() {
  return (
    <Section className="!py-16 sm:!py-20">
      <SectionLabel index="00">Free operations audit</SectionLabel>
      <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        A genuine read on where your operation is leaking time and money.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Six questions. No gimmicks. Answer honestly and you&apos;ll get a diagnostic built
        from your actual answers, not a generic pitch.
      </p>
      <div className="mt-10 max-w-2xl">
        <AuditFlow />
      </div>
    </Section>
  );
}
