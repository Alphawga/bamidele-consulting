import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import AlphaBrainWaitlistForm from "./AlphaBrainWaitlistForm";
import TrackedCta from "./TrackedCta";
import shell from "./AsoOkeShell.module.css";
import styles from "./AlphaBrainPage.module.css";

const STEPS = [
  {
    title: "It sends the brief before you plan the day",
    body: "Early in the morning it reads the state of everything and gives you the shape of the day in one paragraph: what aged overnight, what is behind, what is on the calendar, and the one thing that will block the rest if it does not get done. You start the day reacting to a summary instead of spending the first hour building one.",
  },
  {
    title: "Everything lands in one inbox that ages in public",
    body: "A commitment you made on a call, a draft waiting on your approval, a note you sent yourself at midnight and never filed. Each item carries the number of days it has been sitting there, and that number is the point, because a promise that is six days old should not look the same as one made this morning.",
  },
  {
    title: "It watches loops, not tasks",
    body: "A task list tells you what you wrote down. A loop tells you how many days since you last closed one out, whether that is publishing something, making a follow-up, or logging the money. Four quiet days on outreach shows up as a red four on the screen, instead of an item you keep reading past.",
  },
  {
    title: "It checks in, and it escalates",
    body: "Around midday it asks about the thing that is still not done. Snooze it twice and the next message is sharper, and it names the pattern rather than the task, because the second miss in a row is a different problem from the first. It stops when the loop closes, not when you close the app.",
  },
  {
    title: "It closes the day, or makes you say why",
    body: "In the evening it lists what is still open and gives you two options: close it, or carry it with a reason attached. A loop carried with a reason is a decision you made. A loop carried in silence is drift, and it will lead with that one in the morning.",
  },
];

export default function AlphaBrainPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={`${shell.container} ${styles.header}`}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          AlphaBrain
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>AlphaBrain</h1>
        <p className={`${shell.ledes} ${styles.lede} ${shell.rise} ${shell.riseC}`}>
          The operating system I run my own week on. It pushes the work at me instead of
          waiting for me to open it.
        </p>
        <div className={`${styles.heroCtas} ${shell.rise} ${shell.riseD}`}>
          <TrackedCta
            href="#waitlist"
            className={shell.btnp}
            event="alphabrain_waitlist_cta_click"
            data={{ location: "alphabrain_hero" }}
          >
            Join the waitlist ↓
          </TrackedCta>
        </div>
        <p className={`${styles.heroNote} ${shell.rise} ${shell.riseD}`}>
          Being built now. Not open yet.
        </p>
      </header>

      <section className={styles.scene}>
        <div className={shell.container}>
          <div className={`${shell.slabel} ${shell.slabelOnDark}`}>
            <SeamMark onDark />
            The problem
          </div>
          <p className={styles.sceneText}>
            When you work alone, nothing is late until you happen to remember it.
          </p>
          <p className={styles.sceneBody}>
            The draft you finished on Thursday is still sitting in a folder on Tuesday, the
            follow-up you promised on a call is somewhere in your head, and the only reason
            either of them moves is that you thought of it that morning. Every tool I tried
            waited for me to open it, and the day I most needed it was reliably the day I did
            not.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.intro}>
          <p className={styles.bodyP}>
            I have been running my own week out of a folder of plain text files and a set of
            commands for months now. It holds the goals, the client work, the content
            pipeline, the money and the reading, and every working session writes its outcome
            back to disk, so nothing that matters lives only in a chat window I will never
            scroll back to.
          </p>
          <p className={styles.bodyP}>
            It works, and it has one flaw that any second person on the team would have fixed
            immediately. It waits. It sits there being completely correct until I open it, and
            on the days I do not open it, the loops go quietly stale and nobody says a word.
          </p>
          <p className={styles.bodyP}>
            AlphaBrain is that folder rebuilt as something that comes to you: on your phone, in
            your browser, and in a chat thread that starts the conversation instead of waiting
            for you to start it.
          </p>
        </div>

        <div className={`${shell.slabel} ${styles.sectionLabel}`}>
          <SeamMark />
          What it does
        </div>
        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.title} className={`${shell.card} ${styles.step}`}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className={`${shell.card} ${styles.statusCard}`}>
          <div className={`${shell.slabel} ${styles.statusLabel}`}>
            <SeamMark />
            Where it is right now
          </div>
          <p className={styles.statusBody}>
            AlphaBrain runs for exactly one person today, and that person is me. It lives in
            text files and a terminal. The design for the phone and desktop version is
            finished and the build is underway.
          </p>
          <p className={styles.statusBody}>
            I am not going to put a launch date on this page that I cannot keep. What I will
            commit to is that the people on this list hear first, and they hear from me
            directly rather than from an announcement.
          </p>
        </div>

        <p className={styles.footnote}>
          If you came here for the operations work this grew out of, that is over on the{" "}
          <Link href="/offers">Offers</Link> page.
        </p>
      </section>

      <section id="waitlist" className={styles.waitlistSection}>
        <div className={shell.slabel}>
          <SeamMark />
          Join the waitlist
        </div>
        <p className={styles.waitlistIntro}>
          Two fields. Your email, so I can tell you when it opens, and one optional line about
          what keeps slipping in your own week, because that is the thing I am building
          against.
        </p>
        <AlphaBrainWaitlistForm />
      </section>

      <AsoOkeFooter />
    </div>
  );
}
