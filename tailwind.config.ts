import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark surfaces, deepest first.
        ink: "#0B0F1C",
        midnight: "#1A2038",
        indigo: "#2B3459",
        "slate-blue": "#3D4A85",

        // Accent. 8.5:1 on ink, but only 2.1:1 on cream —
        // decorative on light surfaces (rules, numerals, icon strokes).
        // Never body text on light.
        champagne: "#C9A961",

        // Light surfaces and text.
        vanilla: "#F2EADA", // 16.0:1 on ink
        sand: "#E3D6BE",
        cream: "#FBF8F3",
        white: "#FFFFFF",
        "text-dark": "#14182B",
        "text-muted": "#5B6472", // 5.65:1 on cream
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "step--1": "var(--step--1)",
        "step-0": "var(--step-0)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        "step-4": "var(--step-4)",
        "step-5": "var(--step-5)",
        "step-6": "var(--step-6)",
        "step-7": "var(--step-7)",
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        // Between Tailwind's 300 and 500. Long enough to read as deliberate,
        // short enough that hover states still feel responsive.
        "400": "400ms",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(3%, -4%, 0) scale(1.06)" },
          "66%": { transform: "translate3d(-3%, 3%, 0) scale(0.97)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 38s linear infinite",
        "marquee-right": "marquee-right 38s linear infinite",
        drift: "drift 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
