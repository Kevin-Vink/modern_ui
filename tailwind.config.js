/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'slide-sm': '15.625rem',
        'slide-lg': '25rem',
        'slide-xl': '52.5rem',
      },
      fontFamily: {
        'cera-pro': ['Cera Pro', 'Trebuchet MS', 'sans-serif'],
      },
      screens: {
        xs: '400px',
        '2xl': '1537px',
      },
      maxWidth: {
        '3/4': '75%',
        '9/10': '90%',
      },
      boxShadow: {
        slide: 'inset 0 -175px 175px -75px #0e1012',
        'slide-drop': '0 0 100px 75px #0e1012',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      colors: {
        woodsmoke: {
          DEFAULT: '#0E1012',
          50: '#5E6C79',
          100: '#55626E',
          200: '#444D57',
          300: '#2C303A',
          400: '#161A1D',
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
