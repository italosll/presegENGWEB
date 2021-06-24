module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      animation: {
        'scale-in-out': 'scale-in-out 0.2s linear',
      },
      keyframes: {
        'scale-in-out': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.85)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
    fontFamily: {
      Sen: ['Sen'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
