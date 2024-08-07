/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        governor_bay: "#344ABA",
        governor_bay_transparent: "rgb(52, 74, 186, 0)",
        blush_pink: "#FE71FE",
        blush_pink_transparent: "rgb(52, 74, 186, 0)",
        malibu: "#7199FF",
        blue_ribbon: "#2463FF",
        purple_mountains_majesty: "#887DC0",
        deep_koamaru: "#261676"
      },
      boxShadow: {
        home_container: "0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset",
        home_play: "0px -12px 0px 11px #9D2DF5 inset, 0px -4px 0px 5px #243041 inset",
        home_how: "0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset",
        howtoplay_back: "0px -16px 0px 13px #9D2DF5 inset, 0px -5px 0px 0px #243041 inset",
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