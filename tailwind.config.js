/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#2563eb',
          cyan: '#06b6d4',
        },
      },
    },
  },
  plugins: [],
}
