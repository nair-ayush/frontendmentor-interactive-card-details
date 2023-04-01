// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      veryDarkViolet: 'hsl(278, 68%, 11%)',
      darkGrayViolet: 'hsl(279, 6%, 55%)',
      lightGrayViolet: 'hsl(270, 3%, 87%)',
      inputBlue: 'hsl(249, 99%, 64%)',
      inputPurple: 'hsl(278, 94%, 30%)',
      errorRed: 'hsl(0, 100%, 66%)'
    },
    screens: {
      'sm': '376px'
    }
  },
  plugins: [],
}

