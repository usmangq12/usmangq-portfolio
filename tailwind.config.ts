import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#181818",
        foreground: "#EEEEEE",
        border: "#333333",
        accent: {
          DEFAULT: "#F9C412",
          // Link/accent TEXT colour. The yellow reads at ~10:1 on #181818,
          // so one shade serves both fills and text.
          light: "#F9C412",
        },
        // ~8:1 on #181818 — supporting text stays easy to read, not dim.
        secondary: "#B3B3B3",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
