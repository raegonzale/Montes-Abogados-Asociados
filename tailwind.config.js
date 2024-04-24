/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:["Roboto Serif","serif"],
      abc2:["Square Peg","cursive"]
    },
    colors:{
      
      "white": "#ffffff",
      "skyBlue":"#043166",
      "blue":"#00D1FF",
      "red":"#FF0000",
      "grey":"#B7BBC0",
      "darkBlue":"#051A39",
      
    },

    animation: {
      blob:"blob 20s infinite"
    },

    keyframes: {
      blob: {
        "0%":{
          transform: "translate(0px, 0px) scale(1)"
        },
        "33%":{
          transform:"translate(30px, -50px) scale(0.8)"
        },
        "66%":{
          transform:"translate(20px, -20px)scale(0.9)"
        },
        "100%":{
          transform:"translate(0px, 0px) scale(1)"
        },
      },
    },
    
  },
  plugins: [],
}

