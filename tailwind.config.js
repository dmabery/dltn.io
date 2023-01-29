module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Bely', 'Serif'],
      body: ['Inter', 'Serif'],
      mono: ['Inconsolata'],
      serif: ['Bely', 'Serif'],
      blackletter: ['Bradley DJR']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}