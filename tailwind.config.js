/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        muted: "#d2d2d2",
        secondary: "#878787",
        background: {
          body: "#040404",
          box: "#1A1A1A",
        },
      },
    },
    fontFamily: {
      geist: ["Geist", "sans-serif"],
    },
  },
  plugins: [],
};
