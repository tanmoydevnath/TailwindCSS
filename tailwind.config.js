/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "colors-primary": "#01051e",
        "colors-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-grey": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF"
      }
    },
    container: {
      center : true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [],
}