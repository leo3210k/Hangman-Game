/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        governor_bay: "rgb(52, 74, 186)",
        governor_bay_transparent: "rgb(52, 74, 186, 0)"
      },
      boxShadow: {
        home: "0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset"
      },
      backgroundImage: {
        'desktop': "url('/src/assets/images/background/background-desktop.svg')",
        'tablet': "url('/src/assets/images/background/background-tablet.svg')",
        'mobile': "url('/src/assets/images/background/background-mobile.svg')",
      }
    },
  },
  plugins: [],
}