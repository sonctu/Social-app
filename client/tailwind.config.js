/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8C01B3",
        secondary: "#E94E2F",
        bgPrimary: "#fafafa",
        grayColor: "#dbdbdb",
        grayPrimary: "#8e8e8e",
        graySecondary: "#C8C8C8",
        bluePrimary: "#0095f6",
        blackPrimary: "#262626",
        pinkPrimary: "#ed4956",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.24) 0px 3px 8px 3px;",
      },
    },
  },
  plugins: [],
};
