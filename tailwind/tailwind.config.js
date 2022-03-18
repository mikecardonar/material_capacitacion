module.exports = {
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
      }
    },
  },
  plugins: [],
}
