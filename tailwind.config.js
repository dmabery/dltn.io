module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Bely', 'Sans-Serif'],
      body: ['Basic Sans', 'Monospace'],
      mono: ['Inconsolata'],
      serif: ['Plantin']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}