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
        background: "var(--background)",
        foreground: "var(--foreground)",
        jade: {
          50: "#f0faf4", 100: "#d4f0df", 200: "#a8e0bf", 300: "#6ec898",
          400: "#3aad72", 500: "#1e8a55", 600: "#166e43", 700: "#125637",
          800: "#0f442c", 900: "#0b3322", 950: "#061f15",
        },
        ink: {
          50: "#f5f5f0", 100: "#e8e6de", 200: "#d4d0c3", 300: "#b5ae9b",
          400: "#968c76", 500: "#7a7060", 600: "#615a4e", 700: "#4d473f",
          800: "#3a3632", 900: "#2a2724", 950: "#1a1816",
        },
        lotus: {
          50: "#fdf4f8", 100: "#fce7f1", 200: "#f9d0e3", 300: "#f4a8cc",
          400: "#ec75aa", 500: "#e04d8c", 600: "#cc2d6c",
        },
        gold: {
          50: "#fdfaf0", 100: "#faf2d4", 200: "#f4e2a3", 300: "#edce68",
          400: "#e6b83a", 500: "#d4a01e", 600: "#b88216",
        },
        sand: {
          50: "#faf8f3", 100: "#f5f0e5", 200: "#ede5d0", 300: "#e0d3b3",
          400: "#cdb88d", 500: "#bda070",
        },
      },
      fontFamily: {
        display: ['"Noto Serif JP"', '"Playfair Display"', 'serif'],
        body: ['"Crimson Pro"', '"Noto Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'breathe': 'breathe 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        breathe: { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
export default config;
