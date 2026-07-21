import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#08090d",
        mist: "#f5f7fb",
        ion: "#87f5ff"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(135,245,255,0.22)"
      }
    }
  },
  plugins: []
};

export default config;
