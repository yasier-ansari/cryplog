/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pri: ["Barlow", "sans-serif"],
        sec: ["inter", "sans-serif"],
        code: ["monospace"]
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
