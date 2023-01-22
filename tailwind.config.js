module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Bely', 'Serif'],
      body: ['Basic Sans', 'Monospace'],
      mono: ['Inconsolata'],
      serif: ['Bradley'],
      blackletter: ['Bradley DJR']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}