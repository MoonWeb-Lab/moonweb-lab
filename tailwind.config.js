/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#0E0E10',
          surface: '#161619',
          'surface-hover': '#1E1E23',
          'surface-elevated': '#25252C',
          text: '#F4F4F6',
          muted: '#B0B0B8',
          subtle: '#888892',
          border: 'rgba(255, 255, 255, 0.09)',
          'border-hover': 'rgba(255, 255, 255, 0.22)',
          accent: '#FFFFFF',
          brand: '#3B82F6',
          emerald: '#10B981',
          danger: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        editorial: '-0.035em',
        tightest: '-0.045em'
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.4)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
}
