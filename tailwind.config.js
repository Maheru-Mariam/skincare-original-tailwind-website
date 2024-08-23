/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode:"jit",
  content: ["./*.{html,js}"],
  
  theme: {
    extend: {
      
     
      container: {
        center: true,
        Padding: {
          DEFAULT: '1rem',
          sm: '1.5 rem',
        }
       } ,
    },
  },
  plugins: [],
}

