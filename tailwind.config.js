const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT:  '#5276AA',
        light: "rgba(84, 120, 171, 0.7)"
      },    
      light: "#E5E5E5", 
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '5/6': '470px'
     }
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
