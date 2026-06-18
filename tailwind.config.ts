import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11243B",
        paper: "#F7F6F2",
        accent: "#C2611B",
        "accent-ink": "#9C4E15",
        muted: "#5B6B7B",
        line: "#E3E1D9",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
      letterSpacing: {
        label: "0.18em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
