/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "500px" },
      },
      spacing: {
        navbarMobile: "110px",
      },
    },
  },
  plugins: [],
};

