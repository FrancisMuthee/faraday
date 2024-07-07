/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./templates/**/*.html', './templates/**/*.js'],
   theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}

