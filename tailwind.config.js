/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FF924B',
        orange2: '#FF5E4B'
      }
    }
  },
  plugins: []
}
