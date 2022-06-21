module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "f-poppins": ["Poppins", "sans-serif"],
        "f-unna": ["Unna", "serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        "slider-top": "1.5fr 1fr 1.5fr",
      },
      fontSize: {
        "10xl": "9.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
