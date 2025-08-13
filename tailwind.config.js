/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1440px",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        "primary-dark": "var(--color-primary-dark)",
        "gray-dark": "var(--color-gray-dark)",
        "neutral-dark": "var(--color-neutral-dark)",
        light: "var(--color-light)",
        "gray-light": "var(--color-gray-light)",
        "gray-medium": "var(--color-gray-medium)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-light": "var(--color-accent-light)",
        muted: "var(--color-muted)",
      },
      fontSize: {
        10: "10px",
        13: "13px",
        22: "22px",
        23: "23px",
        26: "26px",
        28: "28px",
        31: "31px",
        32: "32px",
        35: "35px",
        40: "40px",
      },
      lineHeight: {
        110: "110%",
        130: "130%",
        150: "150%",
      },
      borderRadius: {
        10: "10px",
      },
      spacing: {
        "7px": "7px",
        "10px": "10px",
        "13px": "13px",
        15: "15px",
        18: "18px",
        22: "22px",
        26: "26px",
        363: "363px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        99: "99",
        999: "999",
      },
      maxWidth: {
        700: "700px",
        990: "990px",
        990: "990px",
        1200: "1200px",
      },
      backgroundImage: {
        visibiltyGradient:
          "linear-gradient(180deg, #101012 0%, #1E1D28 100%), #080112;",
        techGradient: "linear-gradient(180deg, #101012 0%, #1E1D28 100%);",
        observeGradient:
          "radial-gradient(50% 50% at 50% 50%, rgba(2, 3, 12, 0.00) 0%, #02030C 100%);",
        bottomGradient:
          "linear-gradient(180deg, rgba(2, 3, 12, 0.00) 14.39%, #02030C 68.12%);",
        topGradient:
          "linear-gradient(0deg, rgba(2, 3, 12, 0.00) 67.09%, #02030C 95.12%);",
        miniGradient:
          "linear-gradient(180deg, #101012 0%, #1E1D28 100%), #080112;",
        globeTopGradient:
          "linear-gradient(180deg, #02030C 0%, #02030C00 100%)",
        globeBottmGradient:
          "linear-gradient(180deg, rgba(2, 3, 12, 0.00) 33.27%, #02030C 70.75%)",
        tabbingCardGradient:
          "linear-gradient(180deg, #101012 0%, #1E1D28 100%)",
      },
    },
  },
  plugins: [],
};
