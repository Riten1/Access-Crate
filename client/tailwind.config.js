/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        italiana: ["Italiana", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        core: {
          primary: "#FFE500",
          secondary: "#BCBCBC",
        },
        supporting: {
          bg : "#2D364C",
          "bg-light" : "#525A6C",

        }
      }
    },
  },
  plugins: [],
};
