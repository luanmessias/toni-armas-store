// =========================================================
// Gulp Task: browsersync
// NOTE: Using gulp v4
// Description:  Sync sass, typescript, html, and browser
// using external config or add modify src
// npm install --save-dev browser-sync gulp-typescript gulpjs/gulp.git#4.0 gulp-load-plugins
// Options: node-sass gulp-sass || gulp-ruby-sass
// =========================================================
var config              = require('../config.js');
var browserSync         = require('browser-sync').create();

module.exports = function(gulp, plugins) {
    return function () {
    var stream = 
// -------------------------------------------- Start Task
    browserSync.init(config.browsersync.opts);

    browserSync.watch(config.sass.src, gulp.series('sass'));
    browserSync.watch(config.typescript.src, gulp.series('ts'));
    browserSync.watch(config.browsersync.watch).on('change', browserSync.reload);
// ---------------------------------------------- End Task
    return stream;
    };
};