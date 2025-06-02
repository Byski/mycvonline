/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./my-cv-app/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          300: '#5eead4',
          500: '#14b8a6',
        }
      }
    },
  },
  plugins: [],
} 