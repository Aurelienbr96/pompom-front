/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        0.8: '0.8',
        0.2: '0.2'
      },
      colors: {
        orange: '#FF924B',
        orange2: '#FF5E4B'
      }
    }
  },
  plugins: []
}
