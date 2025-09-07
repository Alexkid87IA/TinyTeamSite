/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF69B4', // Pink
          dark: '#FF1493',
        },
        secondary: {
          DEFAULT: '#0066CC', // Blue
          dark: '#004C99',
        },
      },
    },
  },
  plugins: [],
};