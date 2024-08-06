/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2613F',     // Replace with your color code
        secondary: '#0C0C0C',   // Replace with your color code
        accent1: '#481E14',     // Replace with your color code
        accent2: '#9B3922',     // Replace with your color code
      },
    },
  },
  plugins: [],
}

