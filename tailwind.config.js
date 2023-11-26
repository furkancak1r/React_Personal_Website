import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Dark mode enabled

  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
      backgroundColor: {
        dark: '#0d0d0d', 
      },
      textColor: {
        dark: '#ffffff', 
      },
    },
    colors: {
      primary: {
        400: '#DDF2FD', 
        500: '#bf552a', 
        600: '#e65115', 
        700: '#914633', 
        1000:'#F5F5F5',
      },
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        950: '#0d0d0d',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
