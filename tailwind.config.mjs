import defaultTheme from "tailwindcss/defaultTheme";

const font = "Monospace"
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [font, ...defaultTheme.fontFamily.mono],
        serif: [font, ...defaultTheme.fontFamily.mono],
        mono: [font, ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};