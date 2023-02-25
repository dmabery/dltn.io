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
    },
    fontFamily: {
      heading: ["p22-mackinac-pro", "sans serif"],
      body: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
      serif: ["Lora", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
