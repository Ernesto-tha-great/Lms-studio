import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** primary */
        prosperity: "#FCFF52",
        forest: "#476520",
        /** base */
        gypsum: "#FCF6F1",
        sand: "#E7E3D4",
        wood: "#655947",
        fig: "#1E002B",
        light: "#ffffff",
        "light-varient": "#e0eaf6",
        /** functional */
        snow: "#FFFFFF",
        onyx: "#CCCCCC",
        success: "#329F3B",
        error: "#E70532",
        disabled: "#9B9B9B",
        /** accent */
        sky: "#7CC0FF",
        citrus: "#FF9A51",
        lotus: "#FFA3EB",
        lavender: "#B490FF",
      },
      fontFamily: {
        noto: ["Futura", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
