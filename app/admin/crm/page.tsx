"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import SeamMark from "@/components/asoOke/SeamMark";
import shell from "@/components/asoOke/AsoOkeShell.module.css";
import styles from "./AdminCrm.module.css";

const STAGES = [
  { value: "lead", label: "Lead" },
  { value: "scorecard", label: "Scorecard" },
  { value: "diagnostic_booked", label: "Diagnostic Booked" },
  { value: "diagnostic_done", label: "Diagnostic Done" },
  { value: "audit_proposed", label: "Audit Proposed" },
  { value: "audit_signed", label: "Audit Signed" },
  { value: "blueprint", label: "Blueprint" },
  { value: "retainer", label: "Retainer" },
  { value: "lost", label: "Lost" },
];

const SOURCES = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "scorecard", label: "Scorecard" },
  { value: "referral", label: "Referral" },
  { value: "outreach", label: "Outreach" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "other", label: "Other" },
];

const ACTIVITY_TYPES = [
  { value: "call", label: "Call" },
  { value: "dm", label: "DM" },
  { value: "email", label: "Email" },
  { value: "meeting", label: "Meeting" },
  { value: "note", label: "Note" },
  { value: "scorecard", label: "Scorecard" },
];

type Lead = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  whatsapp: string | null;
  source: string;
  stage: string;
  value: number | null;
  notes: string | null;
  nextAction: string | null;
  nextActionDate: string | null;
  lastContactDate: string | null;
  createdAt: string;
  updatedAt: string;
  _count: { activities: number };
};

type Activity = {
  id: string;
  type: string;
  notes: string;
  createdAt: string;
};

type Stats = {
  totalLeads: number;
  scorecard: number;
  diagnosticBooked: number;
  diagnosticDone: number;
  auditProposed: number;
  auditSigned: number;
  blueprint: number;
  retainer: number;
  lost: number;
  pipelineValue: number;
};

const formatNgn = (n: number) => "₦" + n.toLocaleString("en-NG");

const formatDate = (d: string | null) => (d ? new Date(d).toLocaleDateString("en-NG") : "—");

export default function CrmPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    source: "outreach",
    stage: "lead",
    value: "",
    notes: "",
    nextAction: "",
    nextActionDate: "",
  });

  const [activityForm, setActivityForm] = useState({ type: "note", notes: "" });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const [leadsRes, statsRes] = await Promise.all([
        fetch("/api/crm/leads"),
        fetch("/api/crm/stats"),
      ]);
      const leadsJson = await leadsRes.json();
      const statsJson = await statsRes.json();
      setLeads(leadsJson.leads || []);
      setStats(statsJson.stats || null);
    } catch (error) {
      console.error("Failed to load CRM:", error);
      setMessage("Failed to load CRM data.");
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  async function createLead(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/crm/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        value: form.value ? Number(form.value) : null,
      }),
    });
    if (res.ok) {
      setShowForm(false);
      setForm({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        source: "outreach",
        stage: "lead",
        value: "",
        notes: "",
        nextAction: "",
        nextActionDate: "",
      });
      await loadData();
      setMessage("Lead added.");
    } else {
      const json = await res.json();
      setMessage(json.error || "Failed to add lead.");
    }
  }

  async function updateStage(id: string, stage: string) {
    const res = await fetch(`/api/crm/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage }),
    });
    if (res.ok) {
      await loadData();
      if (selected?.id === id) {
        const updated = await res.json();
        setSelected(updated.lead);
      }
      setMessage("Stage updated.");
    }
  }

  async function addActivity(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    const res = await fetch(`/api/crm/leads/${selected.id}/activities`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activityForm),
    });
    if (res.ok) {
      setActivityForm({ type: "note", notes: "" });
      const detail = await fetch(`/api/crm/leads/${selected.id}`).then((r) => r.json());
      setActivities(detail.lead.activities || []);
      await loadData();
      setMessage("Activity added.");
    }
  }

  async function openLead(lead: Lead) {
    setSelected(lead);
    const res = await fetch(`/api/crm/leads/${lead.id}`);
    const json = await res.json();
    setActivities(json.lead?.activities || []);
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead?")) return;
    await fetch(`/api/crm/leads/${id}`, { method: "DELETE" });
    setSelected(null);
    await loadData();
    setMessage("Lead deleted.");
  }

  const activePipeline = useMemo(() => (stats ? stats.totalLeads - stats.lost : 0), [stats]);

  if (loading) {
    return (
      <div className={shell.root}>
        <div className={styles.loading}>
          <p className={styles.loadingText}>Loading CRM…</p>
        </div>
      </div>
    );
  }

  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <div className={shell.slabel}>
              <SeamMark />
              AlphaWGA Internal
            </div>
            <h1 className={styles.title}>Lead CRM</h1>
          </div>
          <div className={styles.headerActions}>
            <button onClick={() => setShowForm(true)} className={styles.btnPrimary}>
              + Add Lead
            </button>
            <button onClick={signOut} className={styles.btnGhost}>
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {message && <div className={styles.message}>{message}</div>}

        {stats && (
          <section className={styles.statGrid}>
            <StatCard label="Total Leads" value={stats.totalLeads} />
            <StatCard label="Active Pipeline" value={activePipeline} />
            <StatCard label="Pipeline Value" value={formatNgn(stats.pipelineValue)} />
            <StatCard label="Diagnostic Booked" value={stats.diagnosticBooked} />
            <StatCard label="Audit Signed" value={stats.auditSigned} />
            <StatCard label="Retainer" value={stats.retainer} />
          </section>
        )}

        <section className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Source</th>
                <th>Stage</th>
                <th>Value</th>
                <th>Next Action</th>
                <th>Touches</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} onClick={() => openLead(lead)}>
                  <td>
                    <p className={styles.leadName}>{lead.name}</p>
                    <p className={styles.leadEmail}>{lead.email}</p>
                  </td>
                  <td className={styles.muted}>{lead.company || "—"}</td>
                  <td className={`${styles.muted} ${styles.capitalize}`}>{lead.source}</td>
                  <td>
                    <StageBadge stage={lead.stage} />
                  </td>
                  <td className={styles.mono}>{lead.value ? formatNgn(lead.value) : "—"}</td>
                  <td className={styles.muted}>
                    {lead.nextAction ? (
                      <span className={styles.nextAction}>
                        {lead.nextAction}{" "}
                        <span className={styles.nextActionDate}>{formatDate(lead.nextActionDate)}</span>
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className={styles.mono}>{lead._count.activities}</td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={7} className={styles.emptyRow}>
                    No leads yet. Add your first lead to start tracking.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Add Lead</h2>
              <button onClick={() => setShowForm(false)} className={styles.closeLink}>
                CLOSE
              </button>
            </div>
            <form onSubmit={createLead}>
              <div className={styles.section}>
                <div className={styles.grid2}>
                  <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                  <Field
                    label="WhatsApp"
                    value={form.whatsapp}
                    onChange={(v) => setForm({ ...form, whatsapp: v })}
                  />
                  <Select
                    label="Source"
                    value={form.source}
                    options={SOURCES}
                    onChange={(v) => setForm({ ...form, source: v })}
                  />
                  <Select
                    label="Stage"
                    value={form.stage}
                    options={STAGES}
                    onChange={(v) => setForm({ ...form, stage: v })}
                  />
                  <Field
                    label="Estimated Value (₦)"
                    type="number"
                    value={form.value}
                    onChange={(v) => setForm({ ...form, value: v })}
                  />
                  <Field
                    label="Next Action Date"
                    type="date"
                    value={form.nextActionDate}
                    onChange={(v) => setForm({ ...form, nextActionDate: v })}
                  />
                  <div className={styles.span2}>
                    <Field
                      label="Next Action"
                      value={form.nextAction}
                      onChange={(v) => setForm({ ...form, nextAction: v })}
                    />
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.field}>
                      <label className={styles.label}>Notes</label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        rows={4}
                        className={styles.textarea}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.formActions}>
                <button type="submit" className={styles.submitBtn}>
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selected && (
        <div className={styles.overlay}>
          <div className={styles.modalLg}>
            <div className={styles.modalHeader}>
              <div>
                <h2 className={styles.modalTitle}>{selected.name}</h2>
                <p className={styles.modalSub}>
                  {selected.email} {selected.whatsapp ? `· ${selected.whatsapp}` : ""}
                </p>
              </div>
              <div className={styles.modalActions}>
                <button onClick={() => deleteLead(selected.id)} className={styles.deleteLink}>
                  Delete
                </button>
                <button onClick={() => setSelected(null)} className={styles.closeLink}>
                  CLOSE
                </button>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.grid3}>
                <div className={styles.field}>
                  <label className={styles.label}>Stage</label>
                  <select
                    value={selected.stage}
                    onChange={(e) => updateStage(selected.id, e.target.value)}
                    className={styles.select}
                  >
                    {STAGES.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Source</label>
                  <p className={`${styles.staticValue} ${styles.capitalize}`}>{selected.source}</p>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Value</label>
                  <p className={styles.staticValueMono}>{selected.value ? formatNgn(selected.value) : "—"}</p>
                </div>
                {selected.notes && (
                  <div className={styles.span3}>
                    <label className={styles.label}>Notes</label>
                    <p className={styles.staticValue}>{selected.notes}</p>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionLabel}>Add Activity</h3>
              <form onSubmit={addActivity} className={styles.activityForm}>
                <select
                  value={activityForm.type}
                  onChange={(e) => setActivityForm({ ...activityForm, type: e.target.value })}
                  className={styles.activitySelect}
                >
                  {ACTIVITY_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={activityForm.notes}
                  onChange={(e) => setActivityForm({ ...activityForm, notes: e.target.value })}
                  placeholder="What happened?"
                  className={styles.activityInput}
                  required
                />
                <button type="submit" className={styles.activityAddBtn}>
                  Add
                </button>
              </form>
            </div>

            <div className={styles.section} style={{ borderBottom: "none" }}>
              <h3 className={styles.sectionLabel}>Activity History</h3>
              {activities.length === 0 ? (
                <p className={styles.muted}>No activities yet.</p>
              ) : (
                <ul className={styles.activityList}>
                  {activities.map((a) => (
                    <li key={a.id} className={styles.activityItem}>
                      <p className={styles.activityNotes}>{a.notes}</p>
                      <p className={styles.activityMeta}>
                        {a.type} · {new Date(a.createdAt).toLocaleString("en-NG")}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className={styles.statCard}>
      <p className={styles.statLabel}>{label}</p>
      <p className={styles.statValue}>{value}</p>
    </div>
  );
}

function StageBadge({ stage }: { stage: string }) {
  const label = STAGES.find((s) => s.value === stage)?.label || stage;
  const lost = stage === "lost";
  return <span className={`${styles.badge} ${lost ? styles.badgeLost : ""}`}>{label}</span>;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label} {required ? "*" : ""}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={styles.input}
      />
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={styles.select}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
