module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      extend: {
        width: {},
        minWidth: theme => theme('width'),
        maxWidth: theme => theme('width'),
        height: {},
        minHeight: theme => theme('height'),
        maxHeight: theme => theme('height'),
      },
    },
  },
  plugins: [],
};
