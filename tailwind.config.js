/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e4ded5",
        secondary: "#d4ac8e",
        darkorange: "#b55730",
        third: "#e4ded5",
      },
      backgroundColor: {
        darkBlue: "#29303c",
        blackblue: "#302f39",
        fullblackblue: "#223240",
        darkorange: "#b55730",
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
