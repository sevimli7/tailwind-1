/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      screens:{
        lg:"1000px",
        xl:"1000px",
  
      },
    },
  
    extend: {
      fontFamily:{
        gemunu:[ 'Gemunu Libre', "sans-serif"],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
