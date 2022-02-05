module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Inter', 'Sans-Serif'],
      body: ['Space Mono', 'Monospace']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}