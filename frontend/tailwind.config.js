/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        authImage: "url('/src/assets/sesion/HeroImage.jpeg')",
      },
    },
  },
  plugins: [],
}
