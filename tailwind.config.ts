import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1B3A6B",
          secondary: "#F5A623",
          accent: "#E63946",
          light: "#F0F4FF",
          dark: "#0D1B2A",
          navy: "#0F2444",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        success: "#16A34A",
        warning: "#D97706",
        error: "#DC2626",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "count-up": "countUp 1.5s ease forwards",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0D1B2A 0%, #1B3A6B 50%, #0D1B2A 100%)",
        "section-gradient": "linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 100%)",
        "cta-gradient": "linear-gradient(135deg, #1B3A6B 0%, #0F2444 100%)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.1)",
        glow: "0 0 32px rgba(245,166,35,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
