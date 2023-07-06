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
        marks: "1770px",
        tablet: "720px",
        mobile: "328px",
      },
      maxHeight: {
        img: "376px",
      },
      screens: {
        cards: "320px",
        desk: "900px",
        customers: "1050px",
        screenMedian: "1250px",
        screen3: "1330px",
        screen4: "630px",
        nomark: "1510px",
      },
      boxShadow: {
        box: "0px -0.05534512922167778px 2.2138051986694336px 0px rgba(0, 0, 0, 0.02), 0px -0.13300204277038574px 5.32008171081543px 0px rgba(0, 0, 0, 0.03), 0px -0.25043103098869324px 10.017241477966309px 0px rgba(0, 0, 0, 0.04), 0px -0.4467261731624603px 17.869047164916992px 0px rgba(0, 0, 0, 0.04), 0px -0.8355522155761719px 33.422088623046875px 0px rgba(0, 0, 0, 0.05), 0px -2px 80px 0px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
