export type ScorecardAnswerValue = 1 | 2 | 3 | 4 | 5;

export type ScorecardQuestion = {
  section: string;
  prompt: string;
  options: [string, string, string, string, string];
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
    options: [
      "From memory, in WhatsApp",
      "From an old quote we copy and edit by hand",
      "From a spreadsheet, but the prices are not always current",
      "From a template, but it still takes a phone call to confirm",
      "From a template in one system",
    ],
  },
  {
    section: "Quotations and sales",
    prompt: "Can you see every open quotation and its status right now?",
    options: [
      "I would have to ask around",
      "Someone would need to check their notebook or phone",
      "Maybe, if the spreadsheet was updated that week",
      "Mostly, but a few live only in someone's head",
      "Yes, in one place",
    ],
  },
  {
    section: "Quotations and sales",
    prompt: "How do quote follow-ups happen?",
    options: [
      "When someone remembers",
      "Only if the customer chases us first",
      "Sometimes, when there is time in the day",
      "Usually, but it depends who is free",
      "Automatically, on schedule",
    ],
  },
  {
    section: "Quotations and sales",
    prompt: "Do you know how many quotes become orders each month?",
    options: [
      "No idea",
      "Only a rough feeling, nothing counted",
      "I could work it out if I dug through the records",
      "Roughly, from memory",
      "I know the exact number",
    ],
  },
  {
    section: "Inventory and delivery",
    prompt: "Where do your stock levels live?",
    options: [
      "In one staff's head",
      "In a notebook kept at the store",
      "In a spreadsheet, updated when someone remembers",
      "In a spreadsheet that is fairly current",
      "In a live system anyone can check",
    ],
  },
  {
    section: "Inventory and delivery",
    prompt: "How do you find out something is out of stock?",
    options: [
      "When a customer orders it",
      "When staff physically go and look",
      "From a stock count, but only once in a while",
      "From a regular check, but not always in time",
      "The system warns us early",
    ],
  },
  {
    section: "Inventory and delivery",
    prompt: "Can you track one order from purchase to delivery in one place?",
    options: [
      "No, it crosses many apps",
      "No, and pulling it together takes calls to three people",
      "Partly, but some steps live in WhatsApp",
      "Mostly, with one or two gaps",
      "Yes, one record end to end",
    ],
  },
  {
    section: "Inventory and delivery",
    prompt: "How often is stock bought twice, lost, or miscounted?",
    options: [
      "More than I want to admit",
      "Often enough that it worries me",
      "A few times a quarter",
      "Rarely, maybe once in a while",
      "Almost never",
    ],
  },
  {
    section: "Money",
    prompt: "How fast does an invoice go out after delivery?",
    options: [
      "Days later, when we remember",
      "Only after the customer asks for it",
      "Within a day or two, once someone gets to it",
      "The same day, but it depends who is on ground",
      "Same day, every time",
    ],
  },
  {
    section: "Money",
    prompt: "Do you know exactly who owes you and for how long?",
    options: [
      "Roughly, in my head",
      "Only for the customers I speak to often",
      "I could find out, but it takes some digging",
      "Mostly, with a list that is a bit behind",
      "Exactly, in one list",
    ],
  },
  {
    section: "Money",
    prompt: "Do you know your profit per job, not just total sales?",
    options: [
      "No",
      "Only a general sense of what is profitable",
      "For the big jobs, not the small ones",
      "For most jobs, once someone does the math",
      "Yes, for every job",
    ],
  },
  {
    section: "Money",
    prompt: "How are payments matched to invoices?",
    options: [
      "Bank alerts and memory",
      "Someone checks the bank app against a list",
      "In a spreadsheet, but it falls behind sometimes",
      "Recorded against each invoice, but not always same day",
      "Recorded against each invoice",
    ],
  },
  {
    section: "People and tasks",
    prompt: "How does work get assigned?",
    options: [
      "Shouted or sent on WhatsApp",
      "Assigned verbally, with nothing written down",
      "In a WhatsApp group, easy to lose in the scroll",
      "Tracked, but deadlines slip without anyone noticing",
      "Tracked with owners and deadlines",
    ],
  },
  {
    section: "People and tasks",
    prompt: "How do you know a task is actually done?",
    options: [
      "I ask until someone answers",
      "I wait for the customer to complain if it is not",
      "Someone tells me, but I take it on trust",
      "There is a record, but I still double check",
      "The system shows me",
    ],
  },
  {
    section: "People and tasks",
    prompt: "What happens when you travel for a week?",
    options: [
      "Things stall until I return",
      "Only the urgent things get handled",
      "It limps along, but decisions wait for me",
      "Mostly fine, with a few calls I still have to take",
      "The operation runs without me",
    ],
  },
  {
    section: "People and tasks",
    prompt: "How much of your day goes to chasing updates?",
    options: [
      "Most of it",
      "A big chunk, every single day",
      "An hour or two, most days",
      "A little, mostly on busy weeks",
      "Almost none",
    ],
  },
  {
    section: "Data and memory",
    prompt: "If your most trusted staff resigned today, what leaves with them?",
    options: [
      "Half the business",
      "Most of how things actually get done",
      "A lot of context nobody else has",
      "Some know-how, but the essentials are written down",
      "Nothing, it is all recorded",
    ],
  },
  {
    section: "Data and memory",
    prompt: "Where does your customer history live?",
    options: [
      "Scattered chats and heads",
      "Mostly in old WhatsApp threads",
      "Split between a notebook and a few staff members",
      "Mostly in one place, with some gaps",
      "One record per customer",
    ],
  },
  {
    section: "Data and memory",
    prompt: "How long to answer \"how did we do last month?\"",
    options: [
      "Days of gathering",
      "A day spent pulling receipts and messages together",
      "A few hours, once someone sits down for it",
      "Under an hour, if the records are current",
      "Minutes",
    ],
  },
  {
    section: "Data and memory",
    prompt: "How many different apps does one order pass through?",
    options: [
      "Five or more",
      "Four, counting WhatsApp",
      "Three, plus a notebook",
      "Two, and they mostly agree with each other",
      "One",
    ],
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
