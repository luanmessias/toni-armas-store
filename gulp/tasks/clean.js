// =========================================================
// Gulp Task: clean
// Description: deletes dist folder
// npm install --save-del del gulp-load-plugins
// =========================================================
var config = require('../config.js'),
    clean = require('gulp-clean');

module.exports = function (gulp, plugins) {
    return function (cb) {
        var stream =
            // -------------------------------------------- Start Task
            gulp.src('./dist/', { read: false })
                .pipe(clean());
        // ---------------------------------------------- End Task
        return stream;
    };
};