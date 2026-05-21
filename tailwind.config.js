/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f5e2b3',
          DEFAULT: '#c5a880', // Premium Champagne Gold
          dark: '#9a7b56',
          bright: '#d4af37', // Pure Gold Accent
        },
        luxury: {
          black: '#000000',
          dark: '#0a0a0a',
          card: '#121212',
          gray: '#1c1c1c',
          lightGray: '#2c2c2c',
          muted: '#8e8e93',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Cinzel', 'serif'], // Cinematic headers
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-delayed': 'fadeIn 1s ease-out 0.5s forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'draw': 'drawSvg 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        drawSvg: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      backdropBlur: {
        xs: '2px',
        luxury: '20px',
      }
    },
  },
  plugins: [],
}
