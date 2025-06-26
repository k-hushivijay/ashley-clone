// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        ashleyBlack: "#0d0d0d",
        ashleyGray: "#b4b4b4",
        ashleyGold: "#d6b66b",
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.2" }],
        h2: ["2.5rem", { lineHeight: "1.3" }],
        base: ["1rem", { lineHeight: "1.75" }],
      },
      spacing: {
        'section': '8rem',
        'container': '6rem',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        spinSlow: "spinSlow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
