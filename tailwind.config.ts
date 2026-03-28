import type { Config } from "tailwindcss";

// Tailwind v4: primary config is in globals.css via @theme
// This file kept for tooling compatibility only
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
