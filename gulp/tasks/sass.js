// =========================================================
// Gulp Task: sass
// Description: transpiles sass, adds sourcemaps, prefixes
// npm install --save-dev node-sass gulp-sass gulp-sourcemaps gulp-autoprefixer gulp-load-plugins
// =========================================================
var config = require('../config.js');

module.exports = function (gulp, plugins) {
    return function () {
        var stream =
            // -------------------------------------------- Start Task
            gulp.src(config.sass.src)
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.sass().on('error', plugins.sass.logError))
                //.pipe(plugins.autoprefixer(config.autoprefixer.opts))
                .pipe(plugins.sourcemaps.write('.'))
                .pipe(gulp.dest(config.sass.dest))
        // ---------------------------------------------- End Task
        return stream;
    };
};