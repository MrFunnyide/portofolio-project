/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
      keyframes: {},
      animation: {},
      colors: {
        beigeKnight: "#E2E2B6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
