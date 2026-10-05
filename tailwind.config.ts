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
        background: "#0A0A0A",
        border: "#232323",
        accent: {
          DEFAULT: "#1A56A6",
          // Lighter shade for accent-colored TEXT/links so it passes WCAG AA
          // contrast on #0A0A0A (the spec accent #1A56A6 is only ~2.8:1).
          light: "#4C8FD6",
        },
        secondary: "#888888",
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
