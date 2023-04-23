/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-rosario)"],
      },
      colors: {
        "wobbly-blue": "#4169e1",
        "wobbly-blue-dark": "#3251ae",
      },
    },
  },
  plugins: [],
};
