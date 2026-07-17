"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function WaitlistForm({ source }: { source: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-line bg-paper-card p-6">
        <p className="font-display text-lg font-bold">On the list.</p>
        <p className="mt-2 text-muted">I&apos;ll reach out when there&apos;s something to see.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
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
        {status === "sending" ? "Joining..." : "Join the waitlist"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-accent-ink">Something went wrong. Try again.</p>
      ) : null}
    </form>
  );
}
