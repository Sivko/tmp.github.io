/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#27272a",
        "black": "#202124",
        "secondary": "#a1a1aa"
      }
    },
  },
  plugins: [],
}

