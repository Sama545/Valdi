/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#10b981',
        'green-secondary': '#059669',
        'green-dark': '#047857',
      },
    },
  },
  plugins: [],
}
