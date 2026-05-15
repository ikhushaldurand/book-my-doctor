/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary': '#20796d',
        'primary-dark': '#185a52',
        'primary-light': '#E6F3F1',
        'primary-lighter': '#D4EBE8',
        'primary-border': '#B8DDD8',
        'primary-surface': '#EEF6F5',
        'primary-page': '#F4F9F8',
      }
    },
  },
  plugins: [],
}
