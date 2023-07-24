/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--roboto)"],
      archivo: ["var(--archivo)"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        screen5: "530px",
        nomark: "1510px",
        fscreen: "820px",
      },
      boxShadow: {
        box: "0px -0.05534512922167778px 2.2138051986694336px 0px rgba(0, 0, 0, 0.02), 0px -0.13300204277038574px 5.32008171081543px 0px rgba(0, 0, 0, 0.03), 0px -0.25043103098869324px 10.017241477966309px 0px rgba(0, 0, 0, 0.04), 0px -0.4467261731624603px 17.869047164916992px 0px rgba(0, 0, 0, 0.04), 0px -0.8355522155761719px 33.422088623046875px 0px rgba(0, 0, 0, 0.05), 0px -2px 80px 0px rgba(0, 0, 0, 0.07)",
        box2: "0px 5px 21px 0px rgba(0, 0, 0, 0.21);",
      },

      colors: {
        white: "#ffffff",
        white2: "#FFE5EC",
        red1: "#810222",
        red2: "#800020",
        red3: "#800121",
        red4: "#943440",
        blue1: "#132030",
        black1: "#0D1520;",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
