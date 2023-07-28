/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      gris: "#202124",
      blanco: "#fefefe",
      verde: "#515C40",
      negro: "#090909",
    },
    fontFamily: {
      letra: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
