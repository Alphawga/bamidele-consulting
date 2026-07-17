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
        ink: "#0B0E12",
        brass: "#C89B3C",
        steel: "#3D5A73",
        manila: "#E8DFC8",
        rust: "#B23A2E",
        paper: "#F5F1E8",
        // Deprecated transitional aliases — remove once every page is
        // retrofitted to the tokens above (tracked in DESIGN.md Phase 3).
        accent: "#C89B3C",
        "accent-ink": "#A67F2E",
        "accent-disabled": "#5C4A22",
        body: "#D8D2C0",
        muted: "#6E86A0",
        "muted-soft": "#4A5D70",
        line: "#28313B",
        "line-soft": "#1E262E",
        "paper-soft": "#0F1216",
        "paper-card": "#12161B",
        "paper-card-elevated": "#171C22",
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
        label: "0.05em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
