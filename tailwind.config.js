module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dropdown':'#6636C6',
      },
      fontSize: {
        'bigfont': '12rem',
      },
      fontFamily: {
        'segoeui': ['Segoe UI', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
