import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'sans-serif'], 
        mono: ['var(--font-mono)', 'Courier', 'monospace'], 
        chinese: ['var(--font-chinese)', 'Noto Sans SC', 'sans-serif'], 
      },
      colors: {
        primary: '#00A3F4',
        black: '#0D1415',
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

