import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "About",
  description: "Eight years building software. Based in Lagos.",
};

export default function About() {
  return (
    <Section>
      <SectionLabel index="A">About</SectionLabel>
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
              everyone's time. The Okoh build is the clearest example of it.
            </p>
            <p>
              My mission is simple. Help Nigerian businesses stop running on scattered tools.
            </p>
          </div>
          <div className="mt-10">
            <BookButton />
          </div>
        </div>
        <div>
          <div className="aspect-[4/5] rounded-md border border-line bg-paper/60">
            <div className="flex h-full items-center justify-center">
              <span className="label">[TO FILL: photo]</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
