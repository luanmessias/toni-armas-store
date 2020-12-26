// =========================================================
// Gulp Task: moveDist
// Description: move dist folder to external folder. Useful
// for multirepo projects. e.g. a gh-pages-site.
// npm install --save-dev gulp-load-plugins
// =========================================================
var config = require('../config.js');

module.exports = function (gulp, plugins) {
    return function () {
        var stream =
            // -------------------------------------------- Start Task
            gulp.src('./dist/**/*.*')
                .pipe(gulp.dest('./../gh-pages-site'));
        // ---------------------------------------------- End Task
        return stream;
    };
};