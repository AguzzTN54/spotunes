module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: true,
  },
};
