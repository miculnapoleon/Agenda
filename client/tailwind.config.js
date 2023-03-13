/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#373737",
      black_hover: "#333533",
      white: "#fff",
      white_hover: "#e5e5e5",
      blue: "#6D95BB",
      red: "#cc0000"
    },
    fontFamily: {
      sans: ["Playfair Display", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          100: "#373737",
        },
        light: {
          100: "#fff",
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}