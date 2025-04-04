/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(158.64% 112.73% at 100% 0%, #666 0%, #3C3C3C 9.49%, #101010 37.03%, #101010 100%)",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
};