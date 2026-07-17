export type ScorecardAnswerValue = 1 | 2 | 3 | 4 | 5;

export type ScorecardQuestion = {
  section: string;
  prompt: string;
  lowLabel: string;
  highLabel: string;
};

export const SECTIONS = [
  "Quotations and sales",
  "Inventory and delivery",
  "Money",
  "People and tasks",
  "Data and memory",
] as const;

export const scorecardQuestions: ScorecardQuestion[] = [
  {
    section: "Quotations and sales",
    prompt: "When a customer asks for a quote, how does it get made?",
    lowLabel: "From memory, in WhatsApp",
    highLabel: "From a template in one system",
  },
  {
    section: "Quotations and sales",
    prompt: "Can you see every open quotation and its status right now?",
    lowLabel: "I would have to ask around",
    highLabel: "Yes, in one place",
  },
  {
    section: "Quotations and sales",
    prompt: "How do quote follow-ups happen?",
    lowLabel: "When someone remembers",
    highLabel: "Automatically, on schedule",
  },
  {
    section: "Quotations and sales",
    prompt: "Do you know how many quotes become orders each month?",
    lowLabel: "No idea",
    highLabel: "I know the exact number",
  },
  {
    section: "Inventory and delivery",
    prompt: "Where do your stock levels live?",
    lowLabel: "In one staff's head",
    highLabel: "In a live system anyone can check",
  },
  {
    section: "Inventory and delivery",
    prompt: "How do you find out something is out of stock?",
    lowLabel: "When a customer orders it",
    highLabel: "The system warns us early",
  },
  {
    section: "Inventory and delivery",
    prompt: "Can you track one order from purchase to delivery in one place?",
    lowLabel: "No, it crosses many apps",
    highLabel: "Yes, one record end to end",
  },
  {
    section: "Inventory and delivery",
    prompt: "How often is stock bought twice, lost, or miscounted?",
    lowLabel: "More than I want to admit",
    highLabel: "Almost never",
  },
  {
    section: "Money",
    prompt: "How fast does an invoice go out after delivery?",
    lowLabel: "Days later, when we remember",
    highLabel: "Same day, every time",
  },
  {
    section: "Money",
    prompt: "Do you know exactly who owes you and for how long?",
    lowLabel: "Roughly, in my head",
    highLabel: "Exactly, in one list",
  },
  {
    section: "Money",
    prompt: "Do you know your profit per job, not just total sales?",
    lowLabel: "No",
    highLabel: "Yes, for every job",
  },
  {
    section: "Money",
    prompt: "How are payments matched to invoices?",
    lowLabel: "Bank alerts and memory",
    highLabel: "Recorded against each invoice",
  },
  {
    section: "People and tasks",
    prompt: "How does work get assigned?",
    lowLabel: "Shouted or sent on WhatsApp",
    highLabel: "Tracked with owners and deadlines",
  },
  {
    section: "People and tasks",
    prompt: "How do you know a task is actually done?",
    lowLabel: "I ask until someone answers",
    highLabel: "The system shows me",
  },
  {
    section: "People and tasks",
    prompt: "What happens when you travel for a week?",
    lowLabel: "Things stall until I return",
    highLabel: "The operation runs without me",
  },
  {
    section: "People and tasks",
    prompt: "How much of your day goes to chasing updates?",
    lowLabel: "Most of it",
    highLabel: "Almost none",
  },
  {
    section: "Data and memory",
    prompt: "If your most trusted staff resigned today, what leaves with them?",
    lowLabel: "Half the business",
    highLabel: "Nothing, it is all recorded",
  },
  {
    section: "Data and memory",
    prompt: "Where does your customer history live?",
    lowLabel: "Scattered chats and heads",
    highLabel: "One record per customer",
  },
  {
    section: "Data and memory",
    prompt: "How long to answer \"how did we do last month?\"",
    lowLabel: "Days of gathering",
    highLabel: "Minutes",
  },
  {
    section: "Data and memory",
    prompt: "How many different apps does one order pass through?",
    lowLabel: "Five or more",
    highLabel: "One",
  },
];

export type ScorecardBand = {
  name: string;
  description: string;
};

const BANDS: { min: number; band: ScorecardBand }[] = [
  {
    min: 80,
    band: {
      name: "Consolidated",
      description:
        "You are the exception. Your operation would survive you taking a month off. Almost nobody scores here.",
    },
  },
  {
    min: 55,
    band: {
      name: "Held together by heroes",
      description:
        "Your business runs on two or three people's memory. It works until the day one of them is absent.",
    },
  },
  {
    min: 30,
    band: {
      name: "Leaking daily",
      description:
        "Money is leaving through handoffs, forgotten follow-ups, and things bought twice. You feel it but have never costed it.",
    },
  },
  {
    min: 0,
    band: {
      name: "Flying blind",
      description:
        "You are the operating system of your business, and you are tired. The good news: this is fixable, in order.",
    },
  },
];

export type ScorecardSectionScore = { section: string; score: number };

export type ScorecardResult = {
  total: number;
  band: ScorecardBand;
  sectionScores: ScorecardSectionScore[];
  weakestSection: string;
};

export function isValidScorecardAnswers(answers: unknown): answers is ScorecardAnswerValue[] {
  return (
    Array.isArray(answers) &&
    answers.length === scorecardQuestions.length &&
    answers.every((a) => Number.isInteger(a) && a >= 1 && a <= 5)
  );
}

export function scoreScorecard(answers: ScorecardAnswerValue[]): ScorecardResult {
  const total = answers.reduce((sum, a) => sum + a, 0);

  const sectionScores: ScorecardSectionScore[] = SECTIONS.map((section, i) => {
    const chunk = answers.slice(i * 4, i * 4 + 4);
    return { section, score: chunk.reduce((sum, a) => sum + a, 0) };
  });

  const weakestSection = sectionScores.reduce((min, s) => (s.score < min.score ? s : min)).section;
  const band = BANDS.find((b) => total >= b.min)!.band;

  return { total, band, sectionScores, weakestSection };
}
