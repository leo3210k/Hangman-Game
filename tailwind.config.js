/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        governor_bay: "rgb(52, 74, 186)",
        governor_bay_transparent: "rgb(52, 74, 186, 0)",
        blush_pink: "#FE71FE",
        blush_pink_transparent: "rgb(52, 74, 186, 0)",
        malibu: "#7199FF",
        blue_ribbon: "#2463FF"
      },
      boxShadow: {
        home_container: "0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset",
        home_play: "0px -12px 0px 11px #9D2DF5 inset, 0px -4px 0px 5px #243041 inset"
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