module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primario": "#208849",
        "secundario-1": "#7147B1",
        "secundario-2": "#499BA2",
        "acento-1": "#B9536E",
        "acento-2": "#8AB356"
      },
      textColor: {
        "semiblack": "#333",
        "primario": "#208849",
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
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['last'],
    },
  },
  plugins: [],
}
