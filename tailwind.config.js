/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#070b14",
          soft: "#0b1220",
          card: "#0f1729",
        },
        neon: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          purple: "#a855f7",
          pink: "#ec4899",
          green: "#10b981",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.08) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(34,211,238,0.18), transparent 60%)",
        "hero-gradient":
          "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(168,85,247,0.12))",
      },
      boxShadow: {
        neon: "0 0 14px rgba(34,211,238,0.35), 0 0 36px rgba(168,85,247,0.18)",
        "neon-strong":
          "0 0 24px rgba(34,211,238,0.55), 0 0 64px rgba(168,85,247,0.28)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "gradient-y": "gradient-y 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s steps(2, start) infinite",
        glow: "glow 2.5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 12px rgba(34,211,238,0.3), 0 0 30px rgba(168,85,247,0.18)",
          },
          "50%": {
            boxShadow:
              "0 0 22px rgba(34,211,238,0.55), 0 0 60px rgba(168,85,247,0.32)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
