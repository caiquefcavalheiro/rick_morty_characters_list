/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mountain: ["Mountains of Christmas, cursive"],
        roboto: ["Roboto, sans-serif"],
      },
      width: {
        sizeClamp: "clamp(0px, 100%, 1200px)",
      },
    },
  },
  plugins: [],
};
