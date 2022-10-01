/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
  presets: [
    // rem space to px
    require('tailwindcss-rem2px-preset'),
  ],
}
