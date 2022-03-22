const colors = {
  h_cyan: {
    100: "#12dfc0",
  },
  h_yellow: {
    coin: "#ffe900",
  },
  rank: {
    1: "#ffb129",
    2: "#ff48c1",
    3: "#009cde",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: colors,
      boxShadow: {
        100: "rgb(0 0 0 / 26%) 0px 0px 8px 0px",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
