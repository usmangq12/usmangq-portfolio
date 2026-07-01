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
        surface: "#111111",
        border: "#1E1E1E",
        accent: {
          DEFAULT: "#1A56A6",
          // Lighter shade for accent-colored TEXT/icons so it passes WCAG AA
          // contrast on #0A0A0A (the spec accent #1A56A6 is only ~2.8:1).
          light: "#4C8FD6",
          glow: "rgba(26, 86, 166, 0.125)",
        },
        secondary: "#888888",
        terminal: "#4ADE80",
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
      boxShadow: {
        glow: "0 0 0 1px rgba(26, 86, 166, 0.45), 0 8px 30px rgba(26, 86, 166, 0.15)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
