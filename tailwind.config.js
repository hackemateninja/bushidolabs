const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{ts,js,tsx,html,css,scss}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      }
    },
    colors:{
      primary: colors.indigo,
      secondary: colors.rose,
      complementary: colors.blue,
      white: colors.white,
      dark: colors.coolGray,
      grey: colors.gray,
      success: colors.lime,
      error: colors.red,
      warning: colors.yellow,
      info: colors.lightBlue
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
