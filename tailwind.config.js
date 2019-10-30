module.exports = {
  theme: {
    fontFamily: {
      display: ["Comfortaa", "sans-serif"],
      body: ['"Work Sans"', "sans-serif"],
      heading: ["Lato", '"Istok Web"', "serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  variants: {},
  plugins: [
    function({ addBase, config }) {
      addBase({
        h1: { fontSize: config("theme.fontSize.4xl") },
        h2: { fontSize: config("theme.fontSize.2xl") },
        h3: { fontSize: config("theme.fontSize.xl") },
      })
    },
  ],
}
