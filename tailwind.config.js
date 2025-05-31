/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          100: 'var(--color-earth-100)',
          200: 'var(--color-earth-200)',
          300: 'var(--color-earth-300)',
          400: 'var(--color-earth-400)',
          500: 'var(--color-earth-500)',
          600: 'var(--color-earth-600)',
          700: 'var(--color-earth-700)',
          800: 'var(--color-earth-800)',
          900: 'var(--color-earth-900)',
        },
        rust: {
          100: 'var(--color-rust-100)',
          200: 'var(--color-rust-200)',
          300: 'var(--color-rust-300)',
          400: 'var(--color-rust-400)',
          500: 'var(--color-rust-500)',
          600: 'var(--color-rust-600)',
          700: 'var(--color-rust-700)',
          800: 'var(--color-rust-800)',
          900: 'var(--color-rust-900)',
        },
      },
    },
  },
  plugins: [],
};