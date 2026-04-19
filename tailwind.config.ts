import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Outfit", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        cream: "#faf8f4",
        ink: "#0b0b0d",
        ink2: "#18181c",
        blue: {
          DEFAULT: "#1a52ff",
          dark: "#0a3acc",
          light: "#edf0ff",
        },
        green: { DEFAULT: "#00c48c", light: "#e0faf3" },
        border: "#e8e8ec",
        muted: "#6e6e78",
        muted2: "#a0a0ab",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,.05),0 1px 2px rgba(0,0,0,.04)",
        md: "0 4px 16px rgba(0,0,0,.07),0 2px 6px rgba(0,0,0,.04)",
        lg: "0 16px 48px rgba(0,0,0,.09),0 4px 12px rgba(0,0,0,.05)",
        blue: "0 8px 32px rgba(26,82,255,.22)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.75rem",
      },
      animation: {
        pulse2: "pulse2 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.6" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
