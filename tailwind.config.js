module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: "Source Sans Pro",
      secondary: "Playfair Display",
      neut: "Abril Fatface",
    },
    extend: {
      width: {
        w: "1px",
      },
      colors: {
        primary: {
          100: "#fffbf7",
          200: "#fff6ef",
          300: "#fff2e6",
          400: "#ffedde",
          500: "#ffe9d6",
          600: "#ccbaab",
          700: "#998c80",
          800: "#665d56",
          900: "#332f2b",
        },

        orange: {
          100: "#ffe8d4",
          200: "#ffd1a9",
          300: "#ffba7f",
          400: "#ffa354",
          500: "#ff8c29",
          600: "#cc7021",
          700: "#995419",
          800: "#663810",
          900: "#331c08",
        },
      },
    },
  },
  variants: {
    width: ["group-hover", "hover", "focus"],
    height: ["group-hover", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
