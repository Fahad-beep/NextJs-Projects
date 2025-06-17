/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashExtralight: ["ClashDisplay-Extralight", "sans-serif"],
        clashLight: ["ClashDisplay-Light", "sans-serif"],
        clashRegular: ["ClashDisplay-Regular", "sans-serif"],
        clashMedium: ["ClashDisplay-Medium", "sans-serif"],
        clashSemibold: ["ClashDisplay-Semibold", "sans-serif"],
        clashBold: ["ClashDisplay-Bold", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          xs: "380px",
          sm: "600px",
          md: "720px",
          lg: "960px",
          xl: "1200px",
          "2xl": "1300px",
        },
      },
    },
  },
  plugins: [],
};
