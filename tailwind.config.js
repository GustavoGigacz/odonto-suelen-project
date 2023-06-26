/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--roboto)"],
      archivo: ["var(--archivo)"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        white2: "#FFE5EC",
        red1: "#810222",
        red2: "#800020",
        red3: "#800121",
        red4: "#943440",
        blue1: "#132030",
      },
      maxWidth: {
        desktop: "1512px",
        tablet: "720px",
        mobile: "328px",
      },
      screens: {
        mobile: "900px",
      },
    },
  },
  plugins: [],
};
