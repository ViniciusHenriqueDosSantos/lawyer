import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-blue": "#1D70B7",
        "dark-blue": "#083B5A",
        "medium-blue": "#185C8A",
        "dark": "#212121",
        "light": "#FFFFFF",
        "button-selected-bg": "#1D70B7",
        "button-unselected-bg": "#185C8A",
      },
    },
  },
  plugins: [],
};
export default config;
