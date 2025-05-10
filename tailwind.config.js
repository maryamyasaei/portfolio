/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend:{
     colors:{
       primary: '#4f46e5', // soft indigo
       accent: '#f3f4f6',  // light gray background
       darkText: '#1f2937',

      },
      fontFamily: {
        heading: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },},
  },
  plugins: [],
};

