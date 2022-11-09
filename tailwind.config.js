/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basic: "#223240",
        primary: "#e4ded5",
        secondary: "#d4ac8e",
        darkorange: "#b55730",
        third: "#e4ded5",
        lightred: "#d90f54",
        orange: "#c47d57",
      },
      backgroundColor: {
        darkBlue: "#29303c",
        blackblue: "#302f39",
        fullblackblue: "#223240",
        darkorange: "#b55730",
        lightBrown: "#e4ded5",
        whiteBrown: "#c47d57",
      },
      fontFamily: {
        sans: ["Fraunces72ptsupersoft", "sans-erif"],
        fauBold: ["Fraunces144ptsupersoft", "sans-serif"],
        Geom: ["Geomanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
