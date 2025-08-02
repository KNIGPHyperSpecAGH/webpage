// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hyper-500': 'oklch(0.72 0.11 178)',
        primary: "#1E40AF",   // custom blue
        secondary: "#d69017ff", // custom amber
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
// End of tailwind.config.js