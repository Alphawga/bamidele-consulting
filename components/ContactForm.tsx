"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm outline-none focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body?.error ?? "Failed");

      if (body.fallback) {
        // Resend not configured: hand off to the visitor's mail client.
        const subject = encodeURIComponent(`New enquiry from ${data.name}`);
        const lines = [
          `Name: ${data.name}`,
          `Business: ${data.business}`,
          `What they do: ${data.does}`,
          `What is breaking: ${data.breaking}`,
          `Reach them: ${data.contact}`,
        ].join("\n");
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(lines)}`;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-line bg-paper p-8">
        <p className="font-display text-xl font-bold">Got it.</p>
        <p className="mt-2 text-muted">
          Thank you. I will get back to you shortly. If you prefer, book a time directly
          above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="label" htmlFor="name">
          Your name
        </label>
        <input id="name" name="name" required className={fieldClass} />
      </div>
      <div>
        <label className="label" htmlFor="business">
          Business name
        </label>
        <input id="business" name="business" required className={fieldClass} />
      </div>
      <div>
        <label className="label" htmlFor="does">
          What the business does
        </label>
        <input id="does" name="does" required className={fieldClass} />
      </div>
      <div>
        <label className="label" htmlFor="breaking">
          The main thing breaking right now
        </label>
        <textarea id="breaking" name="breaking" required rows={3} className={fieldClass} />
      </div>
      <div>
        <label className="label" htmlFor="contact">
          Best way to reach you
        </label>
        <input id="contact" name="contact" required className={fieldClass} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-ink disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-accent-ink">
          Something went wrong. Email {site.email} directly and I will pick it up.
        </p>
      ) : null}
    </form>
  );
}
