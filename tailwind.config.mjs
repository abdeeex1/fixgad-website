/** @type {import('tailwindcss').Config} */
export default {
  content ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink:'#17221D', sand:'#F7F3EA', terra:'#C75B39', olive:'#66744A', mint:'#E7EEE4' },
      fontFamily: { sans:['Inter','Arial','sans-serif'] },
    },
  },
  plugins: [],
};
