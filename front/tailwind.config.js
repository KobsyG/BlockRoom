/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'papier': "url('/src/medias/papier-arrache.png')",
        'camera': "url('/src/medias/bg-camera.jpeg')",
        'atelier': "url('/src/medias/bg-atelier.webp')",
      }
    },
  },
  plugins: [],
});


