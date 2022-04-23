module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
