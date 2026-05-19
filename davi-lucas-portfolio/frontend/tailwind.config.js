/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        cream: '#FAFAF8',
        ink: '#1A1A18',
        accent: '#2A5F4F',
        'accent-light': '#EAF3EE',
        muted: '#888882',
      },
    },
  },
  plugins: [],
}