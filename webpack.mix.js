const mix = require('laravel-mix');

mix.js('assets/js/app.js', 'dist/js')
   .postCss('assets/css/app.css', 'dist/css')
   .options({
       processCssUrls: false
   });
