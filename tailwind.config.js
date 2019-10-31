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

    require("tailwindcss-animatecss")({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDeplaySpeed: 1000,
      },
      variants: ["responsive"],
    }),
  ],
}
