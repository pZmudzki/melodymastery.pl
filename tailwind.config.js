/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#e6c686",
          base: "#cdb056",
          medium: "#b39a47",
          dark: "#99813d",
        },
        blue: {
          light: "#0002b3",
          base: "#000169",
          medium: "#000052",
          dark: "#000027",
        },
      },
    },
    plugins: [],
  },
};
