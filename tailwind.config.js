/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      gris: "#202124",
      blanco: "#fefefe",
      verde: "#515C40",
      negro: "#090909",
      clarito: "#5f626b",
      positivo: "#008000",
      negativo: "#FE0000",
    },
    fontFamily: {
      letra: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
