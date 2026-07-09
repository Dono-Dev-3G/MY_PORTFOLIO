/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#A8C3B9',
        'dark-bg': '#1E1E2F',
        'dark-card': '#2B2B3C',
        'main-text': '#e0DDDD',
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}