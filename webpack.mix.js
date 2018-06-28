let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/bootstrap.js', 'public/js/bootstrap.js');

mix.react('resources/assets/js/app.js', 'public/js/app.js')

mix.webpackConfig({
  resolve: {
    alias: {
      'utils': path.resolve(__dirname, './resources/assets/js/utils'),
      'components': path.resolve(__dirname, './resources/assets/js/components')
    }
  }
});