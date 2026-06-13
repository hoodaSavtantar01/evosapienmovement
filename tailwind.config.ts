import type { Config } from "tailwindcss";

// The design system lives in app/globals.css (ported from the handoff CSS).
// Tailwind is used here only for layout utilities on top of that system.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest", "system-ui", "sans-serif"],
        meta: ["Inter Tight", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
