/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"'],
        fraunces: ['"Fraunces"']
      },
      fontWeight:{
        bold: '700',
        semiBold: '500'
      },
      fontSize:{
        p: '14px'
      },
      colors:{
        "dark-cyan": '#3c8067',
        cream: '#f2ebe3',
        "very-dark-blue": '#1c232b',
        "dark-grayish-blue": '#6c7289',
        White: '#ffffff'
      },
      screens: {
        s: '375px',
        l: '1440px'
      }
    },
  },
  plugins: [],
}

