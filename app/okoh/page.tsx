import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import BookButton from "@/components/BookButton";
import CalEmbed from "@/components/CalEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Okoh build",
  description:
    "A procurement and supply company in oil and gas moved off five disconnected tools onto one platform. The client came back after two years to build v2.",
};

const v2Scope = [
  "Sourcing to delivery",
  "Warehouse",
  "HR and payroll",
  "Accounting",
];

const techStack = ["[TO FILL]"];

export default function Okoh() {
  return (
    <>
      {/* Header */}
      <Section className="!pb-8">
        <p className="label">Okoh, procurement and supply, oil and gas</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          One system, from sourcing to delivery.
        </h1>
        <p className="mt-6 max-w-2xl font-display text-xl font-bold text-accent">
          500+ clients, including Shell and CEED Supply. The client came back after two
          years to build v2.
        </p>
      </Section>

      {/* The problem */}
      <Section className="!pt-4">
        <SectionLabel index="01">The problem</SectionLabel>
        <div className="max-w-2xl space-y-4 text-lg text-muted">
          <p>
            A procurement and supply company working in international trade, serving oil
            and gas. They source goods, handle purchasing, run a warehouse, ship and
            deliver, and manage clients and staff. Real volume, real money moving.
          </p>
          <p>
            Five disconnected tools ran the business: QuickBooks for some of the
            accounting, spreadsheets for quotes and stock, WhatsApp for orders and
            updates, paper for warehouse records, and Trello for tracking. Manual
            reminders for follow-ups. No payroll in any of it.
          </p>
          <p>
            Nobody could answer simple questions quickly. What did this client order.
            What is in the warehouse right now. What have we been paid. What is late.
          </p>
        </div>
      </Section>

      <div className="hairline" />

      {/* Before / After */}
      <Section>
        <SectionLabel index="02">Before and after</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          <div className="bg-paper-card p-6">
            <p className="label">Before</p>
            <p className="mt-3 text-muted">
              QuickBooks, spreadsheets, WhatsApp, paper, and Trello. Sourcing, orders,
              inventory, and money lived in separate places. No payroll in the system.
            </p>
          </div>
          <div className="bg-paper-card p-6">
            <p className="label text-accent">After</p>
            <p className="mt-3 text-ink">
              One platform covering quotations, sales orders, purchase orders, invoices,
              warehouse receiving and releases, stock counts, inventory, shipments and
              logistics, order tracking, returns, clients and suppliers, fixed assets,
              tasks, and full double-entry accounting with a real chart of accounts. HR
              with employees, payroll, leave, and loans.
            </p>
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* What v1 solved */}
      <Section>
        <SectionLabel index="03">What v1 solved</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              One source of truth
            </h2>
            <p className="mt-4 text-muted">
              A number entered once flows everywhere it is needed. Anyone on the team can
              see what was sourced, what shipped, what was paid, and what is still owed,
              without going through the owner.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Accounting that isn&apos;t a separate app
            </h2>
            <p className="mt-4 text-muted">
              When goods are received, the accounting posts itself. When an invoice is
              raised, it lands in the ledger. The operation and the money are the same
              system, not reconciled at month end. An automation layer sits on top,
              generating the documents that move an order along and keeping status current
              across the tracking board.
            </p>
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* Why the client returned for v2 */}
      <Section>
        <SectionLabel index="04">Why they came back for v2</SectionLabel>
        <p className="max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight">
          Two years after v1 shipped, the client returned to extend the same system rather
          than replace it.
        </p>
        <p className="mt-4 max-w-2xl text-muted">
          The books reflected the operation as it happened instead of being pieced
          together at month end. That was the shift: from a business held together in one
          person&apos;s head to a business that runs on one system. v2 extends that
          foundation instead of starting over.
        </p>
      </Section>

      <div className="hairline" />

      {/* What v2 covers */}
      <Section>
        <SectionLabel index="05">What v2 covers</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
          {v2Scope.map((item) => (
            <div key={item} className="bg-paper-soft p-6">
              <p className="font-display text-lg font-bold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="hairline" />

      {/* Tech stack */}
      <Section>
        <SectionLabel index="06">Tech stack</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-paper-card px-4 py-1.5 font-mono text-xs uppercase tracking-label text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <div className="hairline" />

      {/* Screenshots placeholder */}
      <Section>
        <SectionLabel index="07">Inside the system</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-lg border border-dashed border-line sm:grid-cols-2">
          {["Order tracking board", "Connected accounting ledger"].map((label) => (
            <div
              key={label}
              className="flex aspect-video items-center justify-center bg-paper-soft p-6 text-center"
            >
              <p className="label">{label}: [TO FILL]</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-lg border border-line bg-paper-card-elevated p-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Your operation, one system.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              A short call to see if it is a fit. No pressure. Prefer to think it through
              first, take the free audit instead.
            </p>
            <div className="mt-6 flex justify-center">
              <BookButton />
            </div>
          </div>
          <div className="mx-auto mt-8 min-h-[480px] max-w-2xl overflow-hidden rounded-md border border-line">
            <CalEmbed calLink={site.calLink} />
          </div>
        </div>
      </Section>
    </>
  );
}
