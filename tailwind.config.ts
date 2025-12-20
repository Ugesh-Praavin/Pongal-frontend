export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pongal: {
          yellow: '#FBBF24',   // turmeric
          brown: '#92400E',    // jaggery
          green: '#16A34A',    // sugarcane
          fire: '#F97316',     // bhogi fire
        },
      },
      fontFamily: {
        festive: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
