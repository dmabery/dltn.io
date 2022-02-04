module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Newsreader', 'serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}