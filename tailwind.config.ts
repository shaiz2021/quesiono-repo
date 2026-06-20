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
        midnight: "#212842",
        indigo: "#2E3760",
        "slate-blue": "#3A4680",
        vanilla: "#F0E7D5",
        sand: "#E5D9C3",
        cream: "#FAF7F2",
        white: "#FFFFFF",
        "text-dark": "#1A1E35",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        libre: ["var(--font-libre)"],
        inter: ["var(--font-inter)"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
