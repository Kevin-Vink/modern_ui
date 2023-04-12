/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '3/4': '75%',
      },
      boxShadow: {
        slide: 'inset 0 -175px 175px -75px #0e1012',
        'slide-drop': '0 0 100px 75px #0e1012',
      },
      colors: {
        woodsmoke: {
          DEFAULT: '#0E1012',
          50: '#5E6C79',
          100: '#55626E',
          200: '#444D57',
          300: '#323940',
          400: '#202429',
          500: '#0E1012',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
      },
    },
  },
  plugins: [],
};