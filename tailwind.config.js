/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    'node_modules/preline/dist/*.js',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#323485",
        custom_purple: {
          50: "#f2f6fa",
          100: "#e6edf5",
          200: "#c5d2e6",
          300: "#a3b2d4",
          400: "#6b77b5",
          500: "#3e4095",
          600: "#323485",
          700: "#22236e",
          800: "#161759",
          900: "#0d0d42",
          950: "#05062b",
        }
      },
    },
    screens: {
      xs: "475px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      md: "15px",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [    
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}