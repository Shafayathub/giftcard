/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  theme: {
    daisyui: {
      themes: ['light', 'dark'],
    },
    extend: {},
  },
};
