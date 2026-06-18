import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import CalEmbed from "@/components/CalEmbed";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a call",
  description: "A short call to see if your operation is a fit. No pressure.",
};

export default function Book() {
  return (
    <Section>
      <SectionLabel index="B">Book</SectionLabel>
      <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
        A short call to see if your operation is a fit.
      </h1>
      <p className="mt-4 max-w-xl text-muted">No pressure. Pick a time below.</p>

      <div className="mt-10 min-h-[480px] overflow-hidden rounded-md border border-line">
        <CalEmbed calLink={site.calLink} />
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-2xl font-bold">Prefer to write first?</h2>
          <p className="mt-3 text-muted">
            Tell me a little about your operation. Keep it short. I read every one.
          </p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
