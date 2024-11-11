import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': '#00C896',
        'mint-light': '#7FFFD4',
        'mint-dark': '#00A67C',
        'blue': '#4A90E2',
        'blue-light': '#89CFF0',
        'dark-gray': '#4A4A4A',
      },
      backgroundImage: {
        'dots': "radial-gradient(#4A4A4A 1px, transparent 1px)",
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
    },
  },
  plugins: [],
} satisfies Config;
