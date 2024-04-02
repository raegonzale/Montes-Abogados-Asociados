/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:["Roboto Serif","serif"]
    },
    colors:{
      transparent: "transparent",
      "white": "#ffffff",
      "skyBlue":"#043166",
      "red":"#FF0000",
      "grey":"#B7BBC0"

    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

