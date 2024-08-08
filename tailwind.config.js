/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        governor_bay: "#344ABA",
        governor_bay_transparent: "rgb(52, 74, 186, 0)",
        blush_pink: "#FE71FE",
        blush_pink_transparent: "rgb(52, 74, 186, 0)",
        malibu: "#7199FF",
        blue_ribbon: "#2463FF",
        blue_ribbon_transparent: "rgb(36, 99, 255, .60)",
        purple_mountains_majesty: "#887DC0",
        deep_koamaru: "#151278",
        black_rock: "#1A043A"
      },
      boxShadow: {
        home_container: "0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset",
        home_play: "0px -12px 0px 11px #9D2DF5 inset, 0px -4px 0px 5px #243041 inset",
        home_how: "0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset",
        howtoplay_back: "0px -16px 0px 13px #9D2DF5 inset, 0px -5px 0px 0px #243041 inset",
        category: "0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset"
      },
      backgroundImage: {
        'desktop': "url('/src/assets/images/background/background-desktop.svg')",
        'tablet': "url('/src/assets/images/background/background-tablet.svg')",
        'mobile': "url('/src/assets/images/background/background-mobile.svg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}