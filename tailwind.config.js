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
        background: "#ffffff",
        foreground: "#800020",
        foreground2: "#FFE5EC",
        primary: "#800121",
        font1: "#132030",
        font2: "#fff",
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
