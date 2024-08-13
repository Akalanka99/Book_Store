/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    // Add paths to all of the templates you're using.
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('flowbite/plugin')],
}
