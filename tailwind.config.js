/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        epoxy: {
          white: '#FFFFFF',
          black: '#000000',
          dark: '#0A0A0A',
          accent: '#00F5FF', // Electric Cyan
        },
      },
    },
  },
  plugins: [],
}