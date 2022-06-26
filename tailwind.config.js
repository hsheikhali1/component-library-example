const plugin = require("tailwindcss/plugin");

const returnSafeList = () => ({
  pattern: /^(.*?)/,
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: process.env.NODE_ENV !== "production" ? [returnSafeList()] : [],
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  mode: "jit",
  theme: {
    extend: {
      rotate: {
        "-27": "-27deg",
      },
      borderRadius: {
        curved: "50%",
      },
      width: {
        ultra: "200vw",
      },
    },
    fontFamily: {
      regular: ["Averta OP Regular", "sans-serif"],
      "regular-italic": ["Averta OP Regular Italic", "sans-serif"],
      bold: ["Averta OP Bold", "sans-serif"],
      semibold: ["Averta OP Semibold", "sans-serif"],
    },
    fill: (theme) => ({
      transparent: "transparent",
      current: "currentColor",
      "bits-blue": {
        DEFAULT: theme("colors.bits-blue.DEFAULT"),
        1: theme("colors.bits-blue.1"),
        2: theme("colors.bits-blue.2"),
        3: theme("colors.bits-blue.3"),
        4: theme("colors.bits-blue.4"),
        5: theme("colors.bits-blue.5"),
      },
      "peel-orange": {
        DEFAULT: theme("colors.peel-orange.DEFAULT"),
        1: theme("colors.peel-orange.1"),
        2: theme("colors.peel-orange.2"),
        3: theme("colors.peel-orange.3"),
        4: theme("colors.peel-orange.4"),
        5: theme("colors.peel-orange.5"),
      },
      "marine-teal": {
        DEFAULT: theme("colors.marine-teal.DEFAULT"),
        1: theme("colors.marine-teal.1"),
        2: theme("colors.marine-teal.2"),
        3: theme("colors.marine-teal.3"),
        4: theme("colors.marine-teal.4"),
        5: theme("colors.marine-teal.5"),
      },
      "sassy-purple": {
        DEFAULT: theme("colors.sassy-purple.DEFAULT"),
        1: theme("colors.sassy-purple.1"),
        2: theme("colors.sassy-purple.2"),
        3: theme("colors.sassy-purple.3"),
        4: theme("colors.sassy-purple.4"),
        5: theme("colors.sassy-purple.5"),
      },
      "bubblegum-pink": {
        DEFAULT: theme("colors.bubblegum-pink.DEFAULT"),
        1: theme("colors.bubblegum-pink.1"),
        2: theme("colors.bubblegum-pink.2"),
        3: theme("colors.bubblegum-pink.3"),
        4: theme("colors.bubblegum-pink.4"),
        5: theme("colors.bubblegum-pink.5"),
      },
      "algae-green": {
        DEFAULT: theme("colors.algae-green.DEFAULT"),
        1: theme("colors.algae-green.1"),
        2: theme("colors.algae-green.2"),
        3: theme("colors.algae-green.3"),
        4: theme("colors.algae-green.4"),
        5: theme("colors.algae-green.5"),
      },
      "ultra-grey": {
        DEFAULT: theme("colors.ultra-grey.DEFAULT"),
        1: theme("colors.ultra-grey.1"),
        2: theme("colors.ultra-grey.2"),
        3: theme("colors.ultra-grey.3"),
        4: theme("colors.ultra-grey.4"),
        5: theme("colors.ultra-grey.5"),
      },
      "soft-navy": "#16436c",
      "security-black": "#0a2d4d",
      white: "#fff",
      grey: "#c4c4c4",
      black: "#000",
    }),
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "bits-blue": {
        DEFAULT: "#0572ec",
        1: "#f1faff",
        2: "#c2eaff",
        3: "#66cbff",
        4: "#034ea6",
        5: "#02346e",
      },
      "peel-orange": {
        DEFAULT: "#ffaa05",
        1: "#fffaef",
        2: "#ffe3ac",
        3: "#ffd480",
        4: "#eb7100",
        5: "#cc4e00",
      },
      "marine-teal": {
        DEFAULT: "#69e6ed",
        1: "#f3feff",
        2: "#c3fcff",
        3: "#91f4f9",
        4: "#00848c",
        5: "#005358",
      },
      "sassy-purple": {
        DEFAULT: "#733c86",
        1: "#fdf8ff",
        2: "#f3d6ff",
        3: "#cda5dc",
        4: "#502160",
        5: "#33103f",
      },
      "bubblegum-pink": {
        DEFAULT: "#f17ba5",
        1: "#fff9fc",
        2: "#ffdbec",
        3: "#fab6d7",
        4: "#d3376c",
        5: "#a32751",
        6: "#bf2559",
      },
      "algae-green": {
        DEFAULT: "#6ae4a9",
        1: "#f3fff6",
        2: "#d8ffe0",
        3: "#abfccb",
        4: "#43a670",
        5: "#1c673e",
      },
      "ultra-grey": {
        DEFAULT: "#656e76",
        1: "#f8f8f9",
        2: "#e6e6e8",
        3: "#b9bdc2",
        4: "#35414c",
        5: "#051627",
      },
      "soft-navy": "#16436c",
      "security-black": "#0a2d4d",
      white: "#fff",
      grey: "#c4c4c4",
      black: "#000",
    },
  },
  variants: {
    extend: {
      letterSpacing: {
        tightest: "-.0625em",
      },
      margin: ["responsive", "hover", "first", "last", "even", "odd"],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".-left-half-screen": {
          left: "-50vw",
        },
        ".left-half-screen": {
          left: "50vw",
        },
      };
      addUtilities(newUtilities, []);
    }),
  ],
};
