/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [],
};
