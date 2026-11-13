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
          'surface-hover': '#1C1C21',
          'surface-elevated': '#222228',
          text: '#F4F4F6',
          muted: '#9E9EA4',
          subtle: '#66666D',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
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
        'card': '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.4)',
        'modal': '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
