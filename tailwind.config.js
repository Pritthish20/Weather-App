/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "drizzle": "linear-gradient(180deg, #73ACF7 0%,#130754 100%)",
        "cloud": "linear-gradient(180deg, #AABED5 0%,#414850 100%)",
        "clear":"linear-gradient(180deg, #93BBEB 0%,#3981D8 100%)",
        "rain":"linear-gradient(180deg, #38659B 0%,#122945 100%)" ,
        "snow":"linear-gradient(180deg, #ECEFF3 0%,#BEC7D1 100%)",

      },
    },
  },
  plugins: [],
}