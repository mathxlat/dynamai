module.exports = {
    reactScriptsVersion: "react-scripts",
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }