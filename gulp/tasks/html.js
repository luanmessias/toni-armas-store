// =========================================================
// Gulp Task: html
// Description: minify html
// Dependencies: npm install --save-dev gulp-htmlmin
// =========================================================
var config              = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
    var stream = 
// -------------------------------------------- Start Task
    gulp.src(config.html.src)
        .pipe(plugins.htmlmin(config.html.htmlmin.opts))
        .pipe(gulp.dest(config.html.dest));
// ---------------------------------------------- End Task
    return stream;
    };
};