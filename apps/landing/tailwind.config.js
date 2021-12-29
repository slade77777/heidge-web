module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      animation: {
        loadingDot: 'loadingDot 1s ease-in-out infinite',
      },
      keyframes: {
        loadingDot: {
          '0%, 100%': {
            transform: 'scale(0.8,0.8)',
            opacity: 0.2,
          },
          '20%': {
            transform: 'scale(1,1)',
            opacity: 1,
          },
        },
      },
      colors: {
        hdgBlack: '#1D061D',
      },
      boxShadow: {
        hdg: '0px 0px 10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
