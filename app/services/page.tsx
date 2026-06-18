import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three offers: the consolidation build, ongoing support, and the AI automation layer.",
};

const offers = [
  {
    n: "01",
    title: "The consolidation build",
    body: "One engagement to map and unify your operation into a single system, the way the Okoh build was done. From sourcing to delivery, in one place.",
    price: "By application",
  },
  {
    n: "02",
    title: "Ongoing support and retainer",
    body: "A monthly arrangement to maintain the system, extend it, and improve it as the operation grows.",
    price: "Monthly, scoped to your system",
  },
  {
    n: "03",
    title: "AI automation layer",
    body: "Built on top of the consolidated system, once the foundation exists. The automation is only as good as the system underneath it, so this comes second by design.",
    price: "Available after the consolidation build",
  },
];

export default function Services() {
  return (
    <>
      <Section>
        <SectionLabel index="S">Services</SectionLabel>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight">
          What I build, plainly.
        </h1>
        <div className="mt-12 space-y-px overflow-hidden rounded-md border border-line bg-line">
          {offers.map((o) => (
            <div
              key={o.n}
              className="grid gap-4 bg-paper p-8 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8"
            >
              <p className="font-mono text-2xl font-bold text-accent">{o.n}</p>
              <div>
                <h2 className="font-display text-2xl font-bold">{o.title}</h2>
                <p className="mt-2 max-w-xl text-muted">{o.body}</p>
              </div>
              <p className="font-mono text-sm text-muted sm:text-right">{o.price}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-md border border-line bg-ink px-8 py-12 text-center text-paper">
          <h2 className="font-display text-2xl font-bold">
            Not sure which one fits?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-paper/70">
            Book a call. We will look at your operation and figure it out together.
          </p>
          <div className="mt-6 flex justify-center">
            <BookButton />
          </div>
        </div>
      </Section>
    </>
  );
}
