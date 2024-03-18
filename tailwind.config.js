/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: {
      'banner': "url('../../assets/hero banner.png')",
    }},
  },
  plugins: [
    require("daisyui"),
  ],
}