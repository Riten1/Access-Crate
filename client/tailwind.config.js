/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
