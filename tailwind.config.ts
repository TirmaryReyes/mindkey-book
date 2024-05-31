/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': 'var(--main-bg-color)',
        'main-title': 'var(--main-title-color)',
        paragraph: 'var(--paragraph-color)',
        'sale-price': 'var(--sale-price-color)',
        text: 'var(--text-color)',
        offer: 'var(--offer-color)',
        gray: 'var(--gray-color)',
        green: 'var(--green-color)',
        'green-hover': 'var(--green-hover-color)',
      },
      backgroundImage: {
        'bg-model': "url('/public/model.svg')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
