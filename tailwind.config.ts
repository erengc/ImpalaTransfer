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
        primary: {
          50: '#fff5f0',
          100: '#ffe8d9',
          200: '#ffcfb3',
          300: '#ffad80',
          400: '#ff8a4d',
          500: '#FF6B35', // Ana turuncu
          600: '#e65520',
          700: '#c44516',
          800: '#9e3915',
          900: '#7a2e13',
        },
        secondary: {
          50: '#e6f2f9',
          100: '#cce5f3',
          200: '#99cbe7',
          300: '#66b1db',
          400: '#3397cf',
          500: '#004E89', // Ana mavi
          600: '#003e6e',
          700: '#002f53',
          800: '#001f38',
          900: '#00101d',
        },
        accent: '#F7931E', // Altın sarısı
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;