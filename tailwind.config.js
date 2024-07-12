const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyText: "#111827",
        grayAccent: "rgba(224, 224, 224, 0.63)",
        customBlack: "#191919",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
    fontFamily: {
      mono: ["Inconsolata", "monospace"],
      serif: ["Newsreader", "serif"],
      sansSerif: ["Inter", "Sans Serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
