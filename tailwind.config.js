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
        ter: ["DM Sans", "inter"],
        code: ["monospace"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
