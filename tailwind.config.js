module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "semiblack": "#333333",
        "primario": "#184329",
        "secundario-1": "#7147B1",
        "secundario-2": "#499BA2",
        "acento-1": "#B9536E",
        "acento-2": "#8AB356"
      },
      textColor: {
        "semiblack": "#333333",
        "primario": "#184329",
        "secundario-1": "#7147B1",
        "secundario-2": "#499BA2",
        "acento-1": "#B9536E",
        "acento-2": "#8AB356"
      },
      fontFamily: {
        'nunito': "'Nunito', sans-serif"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(273.97% 273.97% at 54.48% 50.06%, var(--tw-gradient-stops))',
      },
      inset: {
        '7/9': '77%'
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1700px',
      },
      maxWidth: {
        'mobile-mock-gif': '13.6rem',
        'mobile-mock': '24rem',
        'mobile-screen-fx': '28rem'
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['last'],
      boxShadow: ['active'],
      width: ['last'],
      height: ['last'],
    },
  },
  plugins: [],
}
