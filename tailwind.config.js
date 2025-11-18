/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zion': {
          'primary': '#3b82f6',
          'secondary': '#1e40af',
          'success': '#10b981',
          'error': '#ef4444',
          'warning': '#f59e0b',
          'info': '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}