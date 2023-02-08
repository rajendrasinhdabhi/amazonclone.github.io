/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      screens: {
        xs: "320px"
      

      }
      
    },
  },
  plugins: [],
}
