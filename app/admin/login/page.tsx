"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SeamMark from "@/components/asoOke/SeamMark";
import { alphawga } from "@/lib/alphawga";
import shell from "@/components/asoOke/AsoOkeShell.module.css";
import styles from "./AdminLogin.module.css";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      const dest = searchParams.get("from") || "/admin/crm";
      router.replace(dest);
      router.refresh();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <div className={styles.wrap}>
        <div className={styles.brandRow}>
          <SeamMark />
          <span className={styles.wordmark}>{alphawga.name}</span>
        </div>
        <div className={`${shell.slabel} ${styles.eyebrow}`}>AlphaWGA Internal</div>
        <h1 className={styles.title}>Sign in</h1>

        <form onSubmit={onSubmit} className={`${shell.card} ${styles.formCard}`}>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              autoFocus
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              className={styles.input}
            />
          </div>
          {status === "error" && <p className={styles.error}>Incorrect password. Try again.</p>}
          <button type="submit" disabled={status === "submitting" || !password} className={styles.submitBtn}>
            {status === "submitting" ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <Link href="/" className={styles.backLink}>
          ← Back to site
        </Link>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginForm />
    </Suspense>
  );
}
