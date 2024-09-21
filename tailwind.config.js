/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#0C1111",
        "custom-blue": "#5472DF",
        "custom-gray": "#A1A5B7",
        "custom-blue": "#5472DF",
        "custom-secondary": "#221F55",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #4A3AFF 0%, #221F55 100%)",
      },
    },
  },
  plugins: [],
};
