/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/**/*.{jsx,js,ts,tsx}', './client/dist/index.html', './*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue': '#383961',
        'purple': '#825e6e',
        'green': '#676f54',
        'red': '#c73e1d',
        'mustard': '#ca9c3f',
        'light': '#f5f3e0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

