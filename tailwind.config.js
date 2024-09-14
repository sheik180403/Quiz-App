/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        moni: "sans - serif",
      },

      backgroundImage: {
        myColor: "linear-gradient(90deg, #e781fb 40%, #8e76fa 60%)",
      },
    },
  },
  plugins: [],
};
