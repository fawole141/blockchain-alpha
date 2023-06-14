const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "brand-color-1": "#A983F2",
        natural: "#FFFFFF",
        brightRed: "#FF7A3F",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        testDark: "#00040f",
        color2: "#00f6ff",
        paleWhite: "#F0F0F0",
      },
      fontFamily: {
        DuplicateSansBold: [
          "DuplicateSans-Bold",
          ...defaultTheme.fontFamily.serif,
        ],
        DuplicateSansMedium: [
          "DuplicateSans-Medium",
          ...defaultTheme.fontFamily.sans,
        ],
        DuplicateSansThin: [
          "DuplicateSans-Thin",
          ...defaultTheme.fontFamily.sans,
        ],
        DuplicateSansLight: [
          "DuplicateSans-Light",
          ...defaultTheme.fontFamily.sans,
        ],
        Matcha: ["Matcha", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'inputShadow': '2px 2px 15px #A983F2 inset',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};
