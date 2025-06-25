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
          100: 'var(--color-earth-100)', // Creamy beige
          200: 'var(--color-earth-200)', // Light tan
          300: 'var(--color-earth-300)', // Warm tan
          400: 'var(--color-earth-400)', // Terracotta/Orange
          500: 'var(--color-earth-500)', // Deep Red
          600: 'var(--color-earth-600)', // Gold
          700: 'var(--color-earth-700)', // Rich black
          800: 'var(--color-earth-800)', // White
          900: 'var(--color-earth-900)', // Deep Red (accent)
        },
        rust: {
          100: 'var(--color-rust-100)', // Light orange
          200: 'var(--color-rust-200)', // Terracotta/Orange
          300: 'var(--color-rust-300)', // Deep Red
          400: 'var(--color-rust-400)', // Gold accent
          500: 'var(--color-rust-500)', // Black for text
          600: 'var(--color-rust-600)', // White for text
          700: 'var(--color-rust-700)', // Warm tan
          800: 'var(--color-rust-800)', // Light tan
          900: 'var(--color-rust-900)', // Creamy beige
        },
        gold: {
          DEFAULT: 'var(--color-gold)', // Accent gold
        },
      },
    },
  },
  plugins: [],
};