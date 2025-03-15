/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4500', // Orange-red
          dark: '#CC3700',
          light: '#FF7E45',
        },
        secondary: {
          DEFAULT: '#00BFFF', // Deep Sky Blue
          dark: '#0099CC',
          light: '#66D9FF',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1E1E1E',
          light: '#2D2D2D',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
        'texture': "url('/src/assets/images/texture.png')",
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      }
    },
  },
  plugins: [],
}