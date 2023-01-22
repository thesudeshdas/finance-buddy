const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },

    

    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      
      colors: {
        brand: '#10B981',
        'off-black': '#0F172A',
        'off-white': '#f8fafc',
        'neutral-dark': '#64748B',
        'neutral-light': '#CBD5E1',
        'accent-danger': '#DC2626',
      },
    },
  },
  plugins: [],
};
