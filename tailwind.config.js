module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      spacing: {
        xs: '2px',
        sm: '10px',
        md: '20px',
        xl: '75px',
      },
      fontFamily: {
        mono: ['Roboto Mono', 'sans-serif'],
      },
      fontSize: {
        xs: '.8rem',
        sm: '.9rem',
        base: '1rem',
      },
      colors: {
        grey: 'rgba(60, 60, 60)',
        'transparant-white': 'rgba(255, 255, 255, 0.85)',
      },
    },
  },
  plugins: [],
}
