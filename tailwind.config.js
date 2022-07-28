module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
      extend: {
        fontFamily: {
          roboto: [' Roboto'],
        },
        colors: {
          "elementColor": "var(--elements)",
          "bgColor": "var(--background)",
          "textColor": "var(--text)",
          "inputColor": "var(--input)",

        },
      },
    },
    plugins: [],
  }