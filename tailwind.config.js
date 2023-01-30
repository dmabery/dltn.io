module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Lora', 'Serif'],
      body: ['Inter', 'Serif'],
      mono: ['Inconsolata'],
      serif: ['Lora', 'Serif'],
      blackletter: ['Bradley DJR']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}