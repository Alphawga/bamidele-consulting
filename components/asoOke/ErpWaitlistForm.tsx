"use client";

import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import shell from "./AsoOkeShell.module.css";
import styles from "./ErpWaitlistForm.module.css";

type Status = "idle" | "submitting" | "done" | "error";

const INDUSTRIES = ["Procurement & supply chain", "Oil & gas services", "Manufacturing", "Other"];
const TEAM_SIZES = ["1–9", "10–50", "51–200", "200+"];

export default function ErpWaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [industry, setIndustry] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [currentTooling, setCurrentTooling] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/erp-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          companyName,
          role,
          email,
          whatsapp,
          industry,
          teamSize,
          currentTooling,
          source: "products",
        }),
      });
      if (!res.ok) throw new Error("request failed");
      track("erp_waitlist_submit");
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
          I will reach out personally when your industry&apos;s slot opens.
        </p>
      </div>
    );
  }

  return (
    <form className={`${shell.card} ${styles.formCard}`} onSubmit={onSubmit}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fullName">
            Full name
          </label>
          <input
            id="fullName"
            className={styles.input}
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="companyName">
            Company name
          </label>
          <input
            id="companyName"
            className={styles.input}
            type="text"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="role">
            Your role
          </label>
          <input
            id="role"
            className={styles.input}
            type="text"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
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
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="whatsapp">
            WhatsApp number
          </label>
          <input
            id="whatsapp"
            className={styles.input}
            type="tel"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+234"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="industry">
            Industry
          </label>
          <select
            id="industry"
            className={styles.input}
            required
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="teamSize">
            Team size
          </label>
          <select
            id="teamSize"
            className={styles.input}
            required
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {TEAM_SIZES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="currentTooling">
          What do you currently run your operation on?
        </label>
        <input
          id="currentTooling"
          className={styles.input}
          type="text"
          value={currentTooling}
          onChange={(e) => setCurrentTooling(e.target.value)}
          placeholder="Excel, WhatsApp, paper..."
        />
      </div>
      <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Joining…" : "Join the waitlist →"}
      </button>
      {status === "error" && (
        <p className={styles.error}>Something went wrong. Try again in a moment.</p>
      )}
    </form>
  );
}
