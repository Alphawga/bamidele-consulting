export type ToolCount = "1-2" | "3-4" | "5-6" | "7+";
export type ChatCoordination = "constant" | "sometimes" | "rare" | "no";
export type SpreadsheetTracking = "heavy" | "light" | "none";
export type RealTimeVisibility = "always" | "sometimes" | "no";
export type TimeLossArea = "status" | "reentry" | "reconciliation" | "unsure";
export type ReconcileHours = "0-2" | "3-5" | "6-10" | "10+";

export type AuditAnswers = {
  toolCount: ToolCount;
  chatCoordination: ChatCoordination;
  spreadsheetTracking: SpreadsheetTracking;
  realTimeVisibility: RealTimeVisibility;
  timeLossArea: TimeLossArea;
  reconcileHours: ReconcileHours;
};

type Question<K extends keyof AuditAnswers> = {
  key: K;
  prompt: string;
  options: { value: AuditAnswers[K]; label: string }[];
};

export const auditQuestions: {
  [K in keyof AuditAnswers]: Question<K>;
}[keyof AuditAnswers][] = [
  {
    key: "toolCount",
    prompt:
      "How many separate tools do you use for sourcing, inventory, accounting, and HR combined?",
    options: [
      { value: "1-2", label: "1 to 2" },
      { value: "3-4", label: "3 to 4" },
      { value: "5-6", label: "5 to 6" },
      { value: "7+", label: "7 or more" },
    ],
  },
  {
    key: "chatCoordination",
    prompt: "Does your team coordinate day-to-day work over WhatsApp or similar chat apps?",
    options: [
      { value: "constant", label: "Yes, constantly" },
      { value: "sometimes", label: "Sometimes" },
      { value: "rare", label: "Rarely" },
      { value: "no", label: "No" },
    ],
  },
  {
    key: "spreadsheetTracking",
    prompt:
      "Do you use spreadsheets to track things your system should handle, like orders, stock, or quotes?",
    options: [
      { value: "heavy", label: "Yes, heavily" },
      { value: "light", label: "A little" },
      { value: "none", label: "No" },
    ],
  },
  {
    key: "realTimeVisibility",
    prompt:
      "Can you see real-time numbers, what's owed, what's in stock, what shipped, without asking someone?",
    options: [
      { value: "always", label: "Yes, always" },
      { value: "sometimes", label: "Sometimes" },
      { value: "no", label: "No, I have to ask" },
    ],
  },
  {
    key: "timeLossArea",
    prompt: "Where do you think you're losing the most time?",
    options: [
      { value: "status", label: "Chasing status updates" },
      { value: "reentry", label: "Re-entering the same data" },
      { value: "reconciliation", label: "Reconciling the books at month-end" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    key: "reconcileHours",
    prompt:
      "How many hours a week does someone spend manually reconciling or re-typing data between tools?",
    options: [
      { value: "0-2", label: "0 to 2 hours" },
      { value: "3-5", label: "3 to 5 hours" },
      { value: "6-10", label: "6 to 10 hours" },
      { value: "10+", label: "10+ hours" },
    ],
  },
];

const toolCountLabel: Record<ToolCount, string> = {
  "1-2": "1 to 2",
  "3-4": "3 to 4",
  "5-6": "5 to 6",
  "7+": "7 or more",
};

const toolCountScore: Record<ToolCount, number> = {
  "1-2": 0,
  "3-4": 1,
  "5-6": 2,
  "7+": 3,
};
const chatScore: Record<ChatCoordination, number> = {
  no: 0,
  rare: 1,
  sometimes: 2,
  constant: 3,
};
const spreadsheetScore: Record<SpreadsheetTracking, number> = {
  none: 0,
  light: 1,
  heavy: 2,
};
const visibilityScore: Record<RealTimeVisibility, number> = {
  always: 0,
  sometimes: 1,
  no: 2,
};
const hoursScore: Record<ReconcileHours, number> = {
  "0-2": 0,
  "3-5": 1,
  "6-10": 2,
  "10+": 3,
};

const timeLossCopy: Record<TimeLossArea, string> = {
  status: "chasing status updates across tools",
  reentry: "re-entering the same data more than once",
  reconciliation: "reconciling the books at month-end",
  unsure: "handoffs nobody has fully mapped out yet",
};

export type AuditTier = "consolidated" | "fragmenting" | "fragmented" | "critical";

export type AuditResult = {
  score: number;
  maxScore: number;
  tier: AuditTier;
  headline: string;
  summary: string;
  recommendation: string;
};

const tierCopy: Record<
  AuditTier,
  { headline: string; summary: (a: AuditAnswers) => string; recommendation: string }
> = {
  consolidated: {
    headline: "Fairly consolidated already",
    summary: (a) =>
      `You're managing operations across ${toolCountLabel[a.toolCount]} tools. That's lean. The gaps that remain are more about polish than plumbing, especially around ${timeLossCopy[a.timeLossArea]}.`,
    recommendation:
      "A short, free conversation is probably enough to find the next win. Book time below.",
  },
  fragmenting: {
    headline: "Starting to fragment",
    summary: (a) =>
      `You're managing operations across ${toolCountLabel[a.toolCount]} tools. Data still lives in a few different places, and ${timeLossCopy[a.timeLossArea]} is where that gap shows up most.`,
    recommendation:
      "Worth a proper look before it grows with the business. Book a free conversation below.",
  },
  fragmented: {
    headline: "Running on a patchwork",
    summary: (a) =>
      `You're managing operations across ${toolCountLabel[a.toolCount]} tools. Status, stock, and money live in different places, and ${timeLossCopy[a.timeLossArea]} is eating real hours every week.`,
    recommendation:
      "This is the pattern a consolidation project is built for. A paid diagnostic call will map the fastest path to one system.",
  },
  critical: {
    headline: "Held together by memory and WhatsApp",
    summary: (a) =>
      `You're managing operations across ${toolCountLabel[a.toolCount]} tools. Businesses at this stage typically lose 15 to 20 percent of operational time to manual handoffs, the exact pattern Okoh was running before it consolidated onto one system.`,
    recommendation:
      "A paid diagnostic call will map the fastest path off this pattern, based on what's already worked once.",
  },
};

export function isValidAnswers(
  answers: Partial<Record<keyof AuditAnswers, string>>
): answers is AuditAnswers {
  return auditQuestions.every((q) =>
    q.options.some((opt) => opt.value === answers[q.key])
  );
}

export function diagnoseOperation(answers: AuditAnswers): AuditResult {
  const score =
    toolCountScore[answers.toolCount] +
    chatScore[answers.chatCoordination] +
    spreadsheetScore[answers.spreadsheetTracking] +
    visibilityScore[answers.realTimeVisibility] +
    hoursScore[answers.reconcileHours];
  const maxScore = 3 + 3 + 2 + 2 + 3;

  let tier: AuditTier;
  if (score <= maxScore * 0.25) tier = "consolidated";
  else if (score <= maxScore * 0.55) tier = "fragmenting";
  else if (score <= maxScore * 0.8) tier = "fragmented";
  else tier = "critical";

  const copy = tierCopy[tier];
  return {
    score,
    maxScore,
    tier,
    headline: copy.headline,
    summary: copy.summary(answers),
    recommendation: copy.recommendation,
  };
}
