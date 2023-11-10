/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#888",
        primary: "#09546C",
        secondary: "#E6492A",
        accent: "#2F4858",
        footerC: "#2D2C2F",
        bgcolor: "#f5f5f5",
      },
    },
  },
  plugins: [require("daisyui")],
};
