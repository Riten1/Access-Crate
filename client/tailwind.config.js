/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["Italiana", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        core: {
          primary: "#FFE500",
          secondary: "#BCBCBC",
          timer: "#D9D9D9",
        },
        supporting: {
          bg: "#262D40",
          "bg-light": "#525A6C",
          "bg-dark": "#1D232F",
        },
      },
    },
  },
  plugins: [],
};
