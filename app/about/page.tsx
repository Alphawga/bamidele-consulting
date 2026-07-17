import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "About",
  description: "Eight years building software. Based in Lagos.",
};

export default function About() {
  return (
    <>
      <Section className="!pb-8">
        <SectionLabel index="00">About</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight">
              Eight years building software. Based in Lagos.
            </h1>
            <div className="mt-8 space-y-5 text-lg text-muted">
              <p>
                I build the system a business actually runs on. Not a website, not a single
                app, the whole operation in one place.
              </p>
              <p>
                I have spent eight years writing software. The pattern I kept seeing was the
                same. Good businesses, real volume, held together by QuickBooks, a stack of
                spreadsheets, WhatsApp threads, and a few people who remember how it all fits.
                The gaps quietly cost them money.
              </p>
              <p>
                So I do one thing. I map how a business works, then I consolidate it into a
                single system from sourcing to delivery, and I automate the parts that waste
                everyone&apos;s time.{" "}
                <Link href="/okoh" className="text-accent hover:text-accent-ink">
                  The Okoh build
                </Link>{" "}
                is the clearest example of it.
              </p>
            </div>
            <div className="mt-10">
              <BookButton />
            </div>
          </div>
          <div>
            <div className="flex aspect-[4/5] flex-col justify-between rounded-lg border border-line bg-ink p-8 text-paper">
              <span className="label text-accent">Lagos, Nigeria</span>
              <div>
                <p className="font-display text-3xl font-bold leading-tight">
                  Bamidele
                  <br />
                  Ajibola
                </p>
                <p className="mt-2 font-mono text-xs text-paper/60">
                  Full-stack developer · eight years building software
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* How I got to consolidation */}
      <Section>
        <SectionLabel index="01">Before Okoh</SectionLabel>
        <div className="max-w-2xl space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold">SchoolWave</h2>
            <p className="mt-2 text-muted">[TO FILL: what SchoolWave was, and what it taught me.]</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Insight Flow</h2>
            <p className="mt-2 text-muted">[TO FILL: what Insight Flow was, and what it taught me.]</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold">Synk</h2>
            <p className="mt-2 text-muted">[TO FILL: what Synk was, and what it taught me.]</p>
          </div>
          <p className="text-muted">
            None of these are hidden. Each one narrowed what I build now: one system, built
            around how a business actually works, not a template. By the time Okoh came
            along, I knew exactly what I was solving for.
          </p>
        </div>
      </Section>

      <div className="hairline" />

      {/* NDI + mentoring */}
      <Section>
        <SectionLabel index="02">Outside client work</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              NDI facilitation
            </h2>
            <p className="mt-4 text-muted">
              I facilitate for NDI. [TO FILL: specifics on the program and what it covers.]
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Mentoring developers
            </h2>
            <p className="mt-4 text-muted">
              I have mentored 20+ developers, mostly on the same thing this site is about:
              building things that hold up under real use, not just demos. More on{" "}
              <Link href="/mentorship" className="text-accent hover:text-accent-ink">
                the mentorship page
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <div className="hairline" />

      {/* Philosophy */}
      <Section>
        <SectionLabel index="03">Why consolidation, not hype</SectionLabel>
        <p className="max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight">
          Every year there is a new tool promising to fix the operation. Most businesses
          I meet do not need another tool. They need the ones they already have to talk to
          each other.
        </p>
        <p className="mt-4 max-w-2xl text-muted">
          That is the whole philosophy. Automation and AI are only as good as the system
          underneath them. Build the foundation first, then add the intelligence on top.
          That order is not optional.
        </p>
      </Section>
    </>
  );
}
