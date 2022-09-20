/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors : {
        primary:'#0891b2',
        dark : '#111827',
        secondary : "#6b7280",
      },
      screen:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}
