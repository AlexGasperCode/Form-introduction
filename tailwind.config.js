/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'rojo-claro':'#FF262E',
      },
      width : {
        '42': '170px',
      }
    },
  },
  plugins: [],
}

