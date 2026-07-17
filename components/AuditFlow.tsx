"use client";

import { useState } from "react";
import { auditQuestions, diagnoseOperation, type AuditAnswers, type AuditResult } from "@/lib/audit";
import { site } from "@/lib/site";
import CalEmbed from "./CalEmbed";

type Step = "questions" | "email" | "result";
type Status = "idle" | "sending" | "error";

const totalQuestions = auditQuestions.length;

export default function AuditFlow() {
  const [step, setStep] = useState<Step>("questions");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<AuditAnswers>>({});
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<AuditResult | null>(null);

  const question = auditQuestions[questionIndex];

  function selectAnswer(value: string) {
    const next = { ...answers, [question.key]: value } as Partial<AuditAnswers>;
    setAnswers(next);
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("email");
    }
  }

  function goBack() {
    if (step === "email") {
      setStep("questions");
      return;
    }
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
  }

  async function onSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body?.error ?? "Failed");
      setResult(body.result ?? diagnoseOperation(answers as AuditAnswers));
      setStep("result");
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  if (step === "result" && result) {
    return (
      <div className="rounded-lg border border-accent-disabled bg-paper-card-elevated p-8">
        <p className="label text-accent">{result.headline}</p>
        <p className="mt-4 text-lg text-ink">{result.summary}</p>
        <p className="mt-4 text-muted">{result.recommendation}</p>

        <div className="mt-10 border-t border-line pt-8">
          <p className="label">
            Paid diagnostic call: {site.auditPriceNgn === "[TO FILL]" ? "[TO FILL]" : `₦${site.auditPriceNgn}`}
          </p>
          <div className="mt-4 min-h-[480px] overflow-hidden rounded-md border border-line">
            <CalEmbed calLink={site.calLink} />
          </div>
        </div>
      </div>
    );
  }

  if (step === "email") {
    return (
      <div className="rounded-lg border border-line bg-paper-card p-8">
        <p className="label">Almost done</p>
        <h2 className="mt-3 font-display text-2xl font-bold">
          Where should I send your diagnostic?
        </h2>
        <form onSubmit={onSubmitEmail} className="mt-6 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@business.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-sm border border-line bg-paper-soft px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-ink disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "See my diagnostic"}
          </button>
        </form>
        {status === "error" ? (
          <p className="mt-3 text-sm text-accent-ink">Something went wrong. Try again.</p>
        ) : null}
        <button
          type="button"
          onClick={goBack}
          className="mt-4 font-mono text-xs text-muted hover:text-ink"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-line bg-paper-card p-8">
      <p className="label">
        Question {questionIndex + 1} of {totalQuestions}
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold leading-snug">
        {question.prompt}
      </h2>
      <div className="mt-6 grid gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.value as string}
            type="button"
            onClick={() => selectAnswer(opt.value as string)}
            className="rounded-sm border border-line bg-paper-soft px-4 py-3 text-left text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {opt.label}
          </button>
        ))}
      </div>
      {questionIndex > 0 ? (
        <button
          type="button"
          onClick={goBack}
          className="mt-6 font-mono text-xs text-muted hover:text-ink"
        >
          ← Back
        </button>
      ) : null}
    </div>
  );
}
