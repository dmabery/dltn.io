const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryBlue: "#E5EBF0",
        grayAccent: "rgba(224, 224, 224, 0.63)",
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
      heading: ["Newsreader", "sans serif"],
      body: ["Newsreader", "serif"],
      mono: ["Inconsolata", "monospace"],
      serif: ["Newsreader", "serif"],
      sansSerif: ["Inter", "Sans Serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
