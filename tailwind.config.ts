import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        springgreen: {
          "100": "#38ef7d",
          "200": "rgba(56, 239, 125, 0.2)",
        },
        darkseagreen: "#9fdca6",
        plum: "#c8bbff",
        lightpink: "#ffb1cc",
        limegreen: "#05bd4a",
        gray: "rgba(0, 0, 0, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
      boxShadow: {
        "custom-md": "0 2px 10px rgba(0, 0, 0, 0.24)",
        "custom-lg": "0 4px 10px 0 rgba(0,0,0,0.15)",
      },
      translate: {
        "custom-hover": "-5px",
      },
      transitionProperty: {
        "custom-all": "all",
      },
      transitionTimingFunction: {
        "custom-cubic": "cubic-bezier(0.64, 0.01, 0.07, 1.65)",
      },
      borderWidth: {
        "custom-2": "2px",
        "custom-4": "4px",
      },
      borderColor: {
        "custom-blue": "#2196fe",
      },
      backgroundSize: {
        "custom-200": "200px",
      },
      backgroundPosition: {
        "custom-start": "0px",
        "custom-end": "-120px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1440px",
      },
      mq1050: {
        raw: "screen and (max-width: 1024px)",
      },
      mq750: {
        raw: "screen and (max-width: 768px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
