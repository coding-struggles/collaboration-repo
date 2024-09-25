import postcss from 'postcss';

export default postcss([
  require('tailwindcss'),
  require('autoprefixer'),
]);