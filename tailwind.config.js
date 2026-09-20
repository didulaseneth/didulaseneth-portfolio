/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08080c",          // page background
        surface: "#0f0f16",      // card/panel background
        border: "#1e1e2a",
        mist: "#a1a1aa",         // muted body text
        fog: "#e4e4e7",          // near-white text
        accent: {
          from: "#6366f1",       // indigo
          via: "#a855f7",        // violet
          to: "#22d3ee",         // cyan
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.9)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blob: "blob 10s infinite ease-in-out",
        "gradient-x": "gradient-x 6s ease infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};