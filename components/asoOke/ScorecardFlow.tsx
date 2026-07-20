"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/track";
import {
  scorecardQuestions,
  scoreScorecard,
  type ScorecardAnswerValue,
  type ScorecardResult,
} from "@/lib/scorecard";
import { alphawga } from "@/lib/alphawga";
import TrackedCta from "./TrackedCta";
import SeamMark from "./SeamMark";
import shell from "./AsoOkeShell.module.css";
import styles from "./ScorecardFlow.module.css";

type Step = "intro" | "questions" | "contact" | "result";
type Status = "idle" | "submitting" | "error";

const totalQuestions = scorecardQuestions.length;
const answerValues: ScorecardAnswerValue[] = [1, 2, 3, 4, 5];

export default function ScorecardFlow() {
  const [step, setStep] = useState<Step>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<number, ScorecardAnswerValue>>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<ScorecardResult | null>(null);

  const question = scorecardQuestions[questionIndex];

  function startQuiz() {
    setStep("questions");
  }

  function selectAnswer(value: ScorecardAnswerValue) {
    const next = { ...answers, [questionIndex]: value };
    setAnswers(next);
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("contact");
    }
  }

  function goBack() {
    if (step === "contact") {
      setStep("questions");
      return;
    }
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  }

  async function onSubmitContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const answerList = Array.from({ length: totalQuestions }, (_, i) => answers[i]) as ScorecardAnswerValue[];
      const res = await fetch("/api/scorecard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp, answers: answerList }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body?.error ?? "Failed");
      setResult(body.result ?? scoreScorecard(answerList));
      trackEvent("scorecard_submit");
      setStep("result");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  if (step === "intro") {
    return (
      <div className={`${shell.card} ${styles.introCard}`}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Free scorecard
        </div>
        <h1 className={`${styles.introH1} ${shell.rise} ${shell.riseB}`}>
          Find your leaks
          <br />
          <span className={shell.wn}>in 10 minutes.</span>
        </h1>
        <p className={`${styles.introLede} ${shell.rise} ${shell.riseC}`}>
          Find out where your business is leaking money in 10 minutes. 20 questions. Answer
          honestly, nobody sees this but you.
        </p>
        <button
          type="button"
          onClick={startQuiz}
          className={`${shell.btnp} ${styles.introStart} ${shell.rise} ${shell.riseD}`}
        >
          Start →
        </button>
      </div>
    );
  }

  if (step === "result" && result) {
    return (
      <div className={`${shell.card} ${styles.resultCard}`}>
        <p className={styles.resultScore}>
          {result.total}
          <span className={styles.resultMax}>/100</span>
        </p>
        <h2 className={styles.bandName}>{result.band.name}</h2>
        <p className={styles.bandDesc}>{result.band.description}</p>
        <p className={styles.weakest}>Weakest section: {result.weakestSection}</p>
        <p className={styles.proofLine}>
          Built from the leaks found and fixed inside a live 500-client procurement operation.
        </p>
        <p className={styles.ctaText}>
          Want the naira figure on your worst leak? Book the ₦10K diagnostic. It comes off
          your audit price if you book within 7 days.
        </p>
        <TrackedCta
          href={alphawga.calDiagnosticUrl}
          className={`${shell.btnp} ${styles.resultCta}`}
          event="diagnostic_cta_click"
          data={{ location: "scorecard_result" }}
        >
          Book the diagnostic →
        </TrackedCta>
      </div>
    );
  }

  if (step === "contact") {
    return (
      <form className={`${shell.card} ${styles.contactCard}`} onSubmit={onSubmitContact}>
        <p className={shell.slabel}>Almost done</p>
        <h2 className={styles.contactH2}>Where should I send your score?</h2>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="scName">
            Full name
          </label>
          <input
            id="scName"
            className={styles.input}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="scEmail">
            Email
          </label>
          <input
            id="scEmail"
            className={styles.input}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="scWhatsapp">
            WhatsApp number
          </label>
          <input
            id="scWhatsapp"
            className={styles.input}
            type="tel"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+234"
          />
        </div>
        <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
          {status === "submitting" ? "Scoring…" : "Show my score →"}
        </button>
        {status === "error" ? <p className={styles.error}>Something went wrong. Try again.</p> : null}
        <button type="button" onClick={goBack} className={styles.backBtn}>
          ← Back
        </button>
      </form>
    );
  }

  return (
    <div className={`${shell.card} ${styles.questionCard}`}>
      <p className={shell.slabel}>
        Question {questionIndex + 1} of {totalQuestions} · {question.section}
      </p>
      <h2 className={styles.prompt}>{question.prompt}</h2>
      <div className={styles.optionList}>
        {answerValues.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => selectAnswer(value)}
            className={`${styles.optionItem} ${answers[questionIndex] === value ? styles.optionSelected : ""}`}
          >
            <span className={styles.optionBadge}>{value}</span>
            <span className={styles.optionText}>{question.options[value - 1]}</span>
          </button>
        ))}
      </div>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>
      {questionIndex > 0 ? (
        <button type="button" onClick={goBack} className={styles.backBtn}>
          ← Back
        </button>
      ) : null}
    </div>
  );
}
