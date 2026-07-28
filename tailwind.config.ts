import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf9f0",
          100: "#f9f0d8",
          200: "#f2e0ab",
          300: "#e8cc73",
          400: "#dbb53f",
          500: "#c49a2a",
          600: "#a67c1e",
          700: "#7a5c18",
          800: "#5c4516",
          900: "#4d3a16",
        },
        graphite: {
          50: "#f6f6f7",
          100: "#e2e2e4",
          200: "#c5c5c9",
          300: "#a1a1a7",
          400: "#7d7d85",
          500: "#62626a",
          600: "#4d4d54",
          700: "#3f3f45",
          800: "#35353a",
          900: "#2e2e32",
          950: "#18181b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
