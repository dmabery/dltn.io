module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Articulat-heavy-cf', 'Sans-Serif'],
      body: ['Inter', 'Monospace'],
      mono: ['Inconsolata'],
      serif: ['Plantin']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}