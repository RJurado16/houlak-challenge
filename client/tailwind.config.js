module.exports = {
  purge: [
    './src/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './src/**/**/*.{js,jsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      extend: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
