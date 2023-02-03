/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      'mobile':'250px',
      'tablet': '640px',
      'laptop': '900px',
      'desktop': '1200px',
    },
    extend: {
      colors: {
        "mainColor": "#263640",
        "lighterColor": "#929A9F",
        "yellowColor":"#FF9900",
        "bgGrey":"#F5F8FA"
      },
      spacing: {
        '70p': '72%',
        '95p':' 95%'
      },
      boxShadow: {
        'yellow': '0px 0px 20px 0px rgba(255,153,0,0.6)'
      }
    },
  },
  plugins: [],
}
