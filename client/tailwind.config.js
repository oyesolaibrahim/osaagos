/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/components/Header.jsx",
    "src/components/Footer.jsx",
    "src/components/Homepage/Homepage.jsx",
    "src/components/Homepage/FirstSection.jsx",
    "src/components/Homepage/SecondSection.jsx",
    "src/components/Homepage/ThirdSection.jsx",
    "src/components/Homepage/Main.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   purge: ['src/components/Homepage.jsx'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
