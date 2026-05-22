/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Inter', 'sans-serif'],
      },
      colors: {
        apple: {
          black:   '#1d1d1f',
          gray:    '#6e6e73',
          silver:  '#a1a1a6',
          light:   '#f5f5f7',
          white:   '#ffffff',
          blue:    '#0071e3',
          border:  '#d2d2d7',
        },
      },
      fontSize: {
        '2xs': '0.6875rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
      },
    },
  },
  plugins: [],
};
