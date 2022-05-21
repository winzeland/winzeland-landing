module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Poppins"', 'sans-serif'],
      body: ['"Poppins"', 'sans-serif'],
    },
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
