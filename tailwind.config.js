/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#060A13',
          900: '#0B1120',
          800: '#111B31',
          700: '#1A2847'
        },
        cyber: {
          cyan: '#38BDF8',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          emerald: '#10B981',
          rose: '#F43F5E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'laser-flow': 'laserFlow 3s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite'
      },
      keyframes: {
        laserFlow: {
          '0%, 100%': { strokeDashoffset: '0%' },
          '50%': { strokeDashoffset: '100%' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -3px rgba(56, 189, 248, 0.35)',
        'neon-indigo': '0 0 25px -3px rgba(99, 102, 241, 0.35)',
        'neon-emerald': '0 0 25px -3px rgba(16, 185, 129, 0.35)'
      }
    }
  },
  plugins: []
};
