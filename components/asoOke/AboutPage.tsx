import Image from "next/image";
import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import TrackedCta from "./TrackedCta";
import { alphawga } from "@/lib/alphawga";
import shell from "./AsoOkeShell.module.css";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div>
          <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
            <SeamMark />
            About
          </div>
          <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>
            A developer who spent years
            <br />
            <span className={shell.wn}>inside the operation.</span>
          </h1>
          <p className={`${shell.ledes} ${styles.lede} ${shell.rise} ${shell.riseC}`}>
            I am Bamidele Ajibola. Eight years writing software, four of them inside one Lagos
            procurement business, watching where the work actually broke. That is an unusual
            place to learn this from, and it is the reason AlphaWGA starts with the diagnosis
            instead of the build.
          </p>
          <div className={`${styles.heroCtas} ${shell.rise} ${shell.riseD}`}>
            <TrackedCta
              href={alphawga.calDiagnosticUrl}
              className={shell.btnp}
              event="diagnostic_cta_click"
              data={{ location: "about_hero" }}
            >
              Book a free 20-minute read →
            </TrackedCta>
            <Link href="/okoh" className={shell.btnsec}>
              Read the case study
            </Link>
          </div>
        </div>
        <div className={`${styles.portrait} ${shell.rise} ${shell.riseC}`}>
          <Image
            src="/images/portrait.jpg"
            alt="Bamidele Ajibola, portrait"
            fill
            sizes="(max-width: 900px) 80vw, 400px"
          />
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            The pattern
          </div>
          <h2 className={styles.h2}>The same business, over and over.</h2>
          <p className={styles.p}>
            Good companies. Real volume, real money moving. And underneath, QuickBooks doing
            some of the accounting, a stack of spreadsheets doing the rest, WhatsApp carrying
            the orders, paper in the warehouse, and three or four people who remember how it
            all fits together. Nobody planned it that way. It accumulated, one reasonable
            decision at a time.
          </p>
          <p className={styles.p}>
            The gaps between those tools are where the money goes. Not dramatically. Quietly,
            monthly, in rework and chasing and things that were promised twice. Most owners can
            feel it without being able to point at it, which is exactly why it survives so long.
          </p>
        </div>

        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            What changed how I work
          </div>
          <h2 className={styles.h2}>Building it was the easy half.</h2>
          <p className={styles.p}>
            I built a full system for a procurement and supply operation. It ran that business
            for years, and the client came back to build the second version on top of it. The
            useful lesson was not technical. It was that the version which worked only worked
            because I had already spent years watching how that specific business ran, from the
            inside. The software was downstream of that.
          </p>
          <p className={styles.p}>
            Which is the whole argument for doing it in this order. A developer who does not
            understand the operation automates the wrong thing faster. An adviser who cannot
            build hands over a document nobody can execute. The useful position is in between,
            and it is where I have actually been standing.{" "}
            <Link href="/okoh">The Okoh build</Link> is the clearest evidence of it.
          </p>
        </div>

        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            Outside client work
          </div>
          <div className={styles.twoCol}>
            <div>
              <h3 className={styles.colTitle}>Mentoring developers</h3>
              <p className={styles.colBody}>
                I have mentored more than twenty developers, one to one, mostly on the same
                thing this site is about: building things that hold up under real use rather
                than things that demo well.
              </p>
            </div>
            <div>
              <h3 className={styles.colTitle}>Writing it down</h3>
              <p className={styles.colBody}>
                Everything I learn inside an operation gets written up and published, in{" "}
                <Link href="/writing">the notes</Link>. Partly so it compounds, partly because
                anything I cannot explain plainly I probably do not understand well enough to
                charge for.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            Why consolidation
          </div>
          <p className={styles.pullQuote}>
            Most businesses I meet do not need another tool. They need the ones they already
            have to agree with each other.
          </p>
          <p className={styles.p}>
            Every year there is a new system promising to fix the operation. Automation and AI
            are only as good as the process underneath them, and pointing either one at a
            broken process makes the mess arrive faster. Build the foundation, then add the
            intelligence. That order is not optional, and it is the one thing I will not be
            talked out of.
          </p>
        </div>
      </section>

      <section className={styles.closing}>
        <h2 className={styles.closingH2}>Twenty minutes, no charge.</h2>
        <p className={styles.closingSub}>
          Describe how work moves through your business. You will leave knowing which part to
          look at first, and one thing you can go and check yourself this week.
        </p>
        <div className={styles.closingCta}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "about_closing" }}
          >
            Book the free read →
          </TrackedCta>
        </div>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
