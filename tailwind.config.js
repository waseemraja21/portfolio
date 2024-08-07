/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Custom extra small breakpoint
      },
      colors: {
        "custom-gray": "#F6F6F6",
        "custom-blue": "#0B2593",
        "custom-rust": "#2D1517",
        "custom-dblue": "#040928",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        freehand: ["Freehand", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
