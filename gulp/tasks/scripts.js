// =========================================================
// Gulp Task: scripts
// Description: uglify all js, add sourcemaps, rename
// npm install --save-dev  gulp-rename gulp-sourcemaps merge-stream gulp-load-plugins
// =========================================================
var config = require('../config.js'),
    merge = require('merge-stream');

module.exports = function (gulp, plugins) {
    return function () {
        // -------------------------------------------------- src js
        var stream =
            gulp.src(config.scripts.src)
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.uglify())
                .pipe(plugins.rename(config.rename.min))
                .pipe(plugins.sourcemaps.write('.'))
                .pipe(gulp.dest(config.dist.scripts.js));
        // ------------------------------------------------ End Task
        return stream;
    };
};