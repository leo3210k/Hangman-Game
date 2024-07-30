/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/src/assets/images/background/background-desktop.svg')",
        'tablet': "url('/src/assets/images/background/background-tablet.svg')",
        'mobile': "url('/src/assets/images/background/background-mobile.svg')",
      }
    },
  },
  plugins: [],
}