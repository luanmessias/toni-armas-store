// =========================================================
// Gulp Task: styles
// Description: minify all css, add sourcemaps, rename
// Dependencies: npm install --save-dev gulp-minify-css gulp-rename gulp-sourcemaps gulp-load-plugins
// =========================================================
var config              = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
    var stream = 
// -------------------------------------------- Start Task
    gulp.src(config.styles.src)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename(config.rename.outputNameCss))
        .pipe(plugins.rename(config.rename.min))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.styles.dest));
// ---------------------------------------------- End Task
    return stream;
    };
};