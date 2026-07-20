/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // These read from CSS variables (defined in index.css) so the
        // theme toggle can swap dark/light palettes at runtime. The
        // `rgb(... / <alpha-value>)` form keeps Tailwind opacity
        // modifiers (e.g. bg-bg/70) working with variable-based colors.
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        bg2: "rgb(var(--color-bg2) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        card2: "rgb(var(--color-card2) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        // Brand accent colors stay fixed across both themes.
        pink: "#ec4899",
        pink2: "#f472b6",
        purple: "#a855f7",
        green: "#22c55e",
      },
      backgroundImage: {
        grad: "linear-gradient(90deg, #ec4899, #a855f7)",
      },
      fontFamily: {
        sans: ["'Segoe UI'", "system-ui", "sans-serif"],
        mono: ["'Fira Code'", "'Consolas'", "monospace"],
      },
    },
  },
  plugins: [],
};
