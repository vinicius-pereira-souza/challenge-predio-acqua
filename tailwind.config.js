/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        intro: "#F1F1F1",
      },
      backgroundImage: {
        "bg-intro": "url('../image/image 13.png')",
      },
      colors: {
        "blue-right": "#3498DB",
        "blue-left": "#34495E",
        "gray-input": "#BBBBBB",
      },
    },
  },
  plugins: [],
};
