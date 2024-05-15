/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#242424",
        "secondary-dark": "#242828",
        "primary-red": "#FF5858",
      },
    },
  },
  plugins: [],
};
