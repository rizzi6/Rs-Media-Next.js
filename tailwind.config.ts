import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf8f4",
        ink: "#0b0b0d",
        ink2: "#18181c",
        blue: {
          DEFAULT: "#1a52ff",
          dark: "#0a3acc",
          light: "#edf0ff",
        },
        green: {
          DEFAULT: "#00c48c",
          light: "#e0faf3",
        },
        muted: "#6e6e78",
        muted2: "#a0a0ab",
        border: "#e8e8ec",
      },
      
      fontFamily: {
        syne: ["Geom", "sans-serif"],
        jakarta: ["Outfit", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      animation: {
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        marquee: "marqueeAnim 28s linear infinite",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.6" },
        },
        marqueeAnim: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
