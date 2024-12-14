/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#151515",
        "100": "#0c0c0c",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.64);",
        "100": "#fff",
        "200": "#6D98FF",
      },
      yellow: {
        "100": "#f99215",
      },
    },
    fontFamily: {
      'codec': ["codecpro"],
      'codec-light': ["codecpro-light"]
    }
  },
  plugins: [],
}
