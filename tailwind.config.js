/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['Futura'],
        primary: ['HelveticaNow']
      },
      colors: {
        cream: "#f5f5e5"
      },
    },
  },
  plugins: [],
};
