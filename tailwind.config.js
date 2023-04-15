/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx}',
//     './src/components/**/*.{js,ts,jsx,tsx}',
//     './src/app/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// };

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const primary = '#E30B13';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
    },
    extends: {
      fontSize: {
        '2lg': '1.38rem',
      },
    },
  },
  plugins: [],
};
