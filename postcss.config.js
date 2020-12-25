const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    tailwindcss,
    postcssImport,
    ...(production ? [autoprefixer, cssnano({ preset: 'default' })] : []),
  ],
};
