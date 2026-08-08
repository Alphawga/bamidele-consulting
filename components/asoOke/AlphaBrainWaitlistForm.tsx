"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/track";
import shell from "./AsoOkeShell.module.css";
import styles from "./AlphaBrainWaitlistForm.module.css";

type Status = "idle" | "submitting" | "done" | "error";

export default function AlphaBrainWaitlistForm() {
  const [email, setEmail] = useState("");
  const [slipping, setSlipping] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/alphabrain-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slipping, source: "alphabrain" }),
      });
      if (!res.ok) throw new Error("request failed");
      trackEvent("alphabrain_waitlist_submit");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={`${shell.card} ${styles.confirm}`}>
        <h3 className={styles.confirmTitle}>You are on the list.</h3>
        <p className={styles.confirmBody}>
          I will email you from this address when there is something you can actually open,
          and nothing in between. If you wrote down what keeps slipping, I read every one of
          those myself.
        </p>
      </div>
    );
  }

  return (
    <form className={`${shell.card} ${styles.formCard}`} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={styles.input}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourdomain.com"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="slipping">
          What keeps slipping in your week?{" "}
          <span className={styles.optional}>(optional)</span>
        </label>
        <textarea
          id="slipping"
          className={styles.textarea}
          rows={3}
          value={slipping}
          onChange={(e) => setSlipping(e.target.value)}
          placeholder="The follow-up nobody chased, the draft that never went out, the invoice you forgot to send."
        />
      </div>
      <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Joining…" : "Join the waitlist →"}
      </button>
      <p className={styles.privacy}>
        One email when it opens. No newsletter, no forwarding your address anywhere.
      </p>
      {status === "error" && (
        <p className={styles.error}>Something went wrong. Try again in a moment.</p>
      )}
    </form>
  );
}
