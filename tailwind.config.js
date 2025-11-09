/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#df7c0d',
        secondary: '#F6911F',
        text: '#161616',
        border: {
          DEFAULT: '#e5e5e5',
          light: '#D9D9D9',
        },
        gray: {
          light: '#FAFAFA',
          DEFAULT: '#8D8D8D',
        },
      },
      fontFamily: {
        primary: ['var(--font-inter)', 'sans-serif'],
        ojuju: ['var(--font-ojuju)', 'sans-serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
      },
      screens: {
        'phone': '565px',
        'tablet': '768px',
        'tablet-pro': '1204px',
        'desktop': '1366px',
        'lg-desktop': '1920px',
      },
      maxWidth: {
        'container': '1440px',
      },
      fontSize: {
        'normal': '16px',
      },
      borderRadius: {
        'input': '24px',
        'button': '28px',
      },
      boxShadow: {
        'button': '0px 2px 8px 0px #00000040 inset',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
}

