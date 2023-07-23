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
      heading: ["p22-mackinac-pro", "sans serif"],
      body: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
      serif: ["Lora", "serif"],
      sansSerif: ["Inter", "Sans Serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
