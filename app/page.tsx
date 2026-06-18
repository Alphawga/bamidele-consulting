import Link from "next/link";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import BookButton from "@/components/BookButton";
import ScatteredToOne from "@/components/ScatteredToOne";

const problems = [
  {
    title: "Money leaks between tools",
    body: "A quote lives in a spreadsheet, the order in WhatsApp, the payment in QuickBooks. Nobody can match them.",
  },
  {
    title: "No single view of the business",
    body: "You cannot see, in one place, what was sourced, what shipped, what was paid, and what is still owed.",
  },
  {
    title: "Orders tracked by memory",
    body: "The same part gets ordered twice, or not at all, because it lived in someone's head.",
  },
  {
    title: "You are the only thread",
    body: "The day you travel, the operation slows down. Everything routes through one person.",
  },
];

const steps = [
  {
    n: "01",
    title: "We map your operation",
    body: "Every tool, every handoff, every place a number gets re-typed.",
  },
  {
    n: "02",
    title: "We consolidate it",
    body: "Into one system built around how you actually work, not a template.",
  },
  {
    n: "03",
    title: "We automate the repetition",
    body: "The reminders, the status chasing, the reports that eat your week.",
  },
  {
    n: "04",
    title: "We support it as you grow",
    body: "We maintain it and add to it when the operation needs more.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="!py-20 sm:!py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel index="00">Consolidation, Lagos</SectionLabel>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              I consolidate scattered business operations into one intelligent system.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              For Nigerian business owners running their operation across QuickBooks,
              spreadsheets, WhatsApp, and staff who forget things.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BookButton />
              <Link
                href="/work"
                className="text-sm text-ink underline-offset-4 hover:underline"
              >
                See the proof
              </Link>
            </div>
          </div>
          <div className="rounded-md border border-line bg-paper/60 p-6">
            <ScatteredToOne />
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* The problem */}
      <Section>
        <SectionLabel index="01">The problem</SectionLabel>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight">
          The tools do not talk to each other. The gaps cost real Naira.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="bg-paper p-6">
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="hairline" />

      {/* The shift */}
      <Section>
        <SectionLabel index="02">The shift</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">
              One place. One source of truth.
            </h2>
            <p className="mt-6 text-lg text-muted">
              The system consolidates the whole operation, from sourcing to delivery.
              Quotations, inventory, purchasing, order tracking, warehouse, logistics,
              accounting, and HR with payroll. The repetitive tasks in between get automated.
            </p>
            <p className="mt-4 text-lg text-muted">
              A quote becomes an order. An order becomes a purchase. Goods get received,
              shipped, and tracked to delivery. The accounting updates itself as it happens.
              No re-typing the same number into four apps.
            </p>
            <p className="mt-4 text-muted">
              The AI automation layer sits on top of that foundation. It is not the headline.
              It is only as good as the system underneath it.
            </p>
          </div>
          <div className="rounded-md border border-line bg-ink p-8 text-paper">
            <p className="label text-accent">Connected, in order</p>
            <ol className="mt-6 space-y-4 font-mono text-sm">
              {[
                "Quotation",
                "Sales order",
                "Purchase order",
                "Warehouse receiving",
                "Shipment + tracking",
                "Accounting posts itself",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* Proof */}
      <Section>
        <SectionLabel index="03">Proof</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">
              The Okoh build
            </h2>
            <p className="mt-4 text-muted">
              A procurement and supply company in international trade, serving oil and gas.
              Real volume, real money moving.
            </p>
            <Link
              href="/work/okoh"
              className="mt-6 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              Read the full case study →
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
            <div className="bg-paper p-6">
              <p className="label">Before</p>
              <p className="mt-3 text-muted">
                QuickBooks plus disconnected apps plus manual reminders. No payroll inside
                the system. Sourcing, orders, inventory, and money lived in separate places.
              </p>
            </div>
            <div className="bg-paper p-6">
              <p className="label text-accent">After</p>
              <p className="mt-3 text-ink">
                One platform from sourcing to delivery. Quotations, orders, purchasing,
                warehouse, shipments, tracking, full double entry accounting, and HR with
                payroll. An AI automation layer on top.
              </p>
            </div>
            <div className="bg-paper p-6 sm:col-span-2">
              <p className="label">Outcome</p>
              <p className="mt-3 font-display text-xl font-bold text-ink">
                [TO FILL: one or two concrete result numbers, for example hours saved per
                week, faster quote turnaround, fewer missed orders]
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* How it works */}
      <Section>
        <SectionLabel index="04">How it works</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-paper p-6">
              <p className="font-mono text-2xl font-bold text-accent">{s.n}</p>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="hairline" />

      {/* Who this is for */}
      <Section>
        <SectionLabel index="05">Who this is for</SectionLabel>
        <p className="max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight">
          This is for established operations with real volume, especially procurement and
          supply companies serving oil and gas. If your business runs on QuickBooks plus
          spreadsheets plus WhatsApp and the gaps are costing you money, this is for you.
        </p>
        <p className="mt-4 max-w-2xl text-muted">
          It is not for someone who wants a logo and a flyer.
        </p>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-md border border-line bg-ink px-8 py-14 text-center text-paper">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Let us look at your operation together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-paper/70">
            A short call to see if your operation is a fit. No pressure.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton />
          </div>
        </div>
      </Section>
    </>
  );
}
