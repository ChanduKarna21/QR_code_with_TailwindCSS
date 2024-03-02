/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu':["Outfit"]
      },

      colors:{
        grayishblue:'#7b879d',
        Darkblue:'#1f3251',
        lightgray:'#d6e2f0',

      },
    },
  },
  plugins: [],
}

