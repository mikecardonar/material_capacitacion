module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'board': "url('./assets/board.jpg')",
        'revs': "url('./assets/revs.jpg')",
        'steal': "url('./assets/steal.jpg')",
        'plus': "url('./assets/plus.jpg')",
        'mini': "url('./assets/mini.jpg')",
      }
    },
  },
  plugins: [],
}
