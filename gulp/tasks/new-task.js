// =========================================================
// Gulp Task: newTask
// Description: creates a new multifile task template
// Dependencies: npm install gulp-rename gulp-load-plugins
// =========================================================
var config = require('../config.js');

module.exports = function(gulp, plugins) {
    return function() {
    var stream = 
// -------------------------------------------- Start Task
    gulp.src(config.newtask.src)
    .pipe(plugins.rename(config.newtask.outputName))
    .pipe(gulp.dest(config.newtask.dest));
// ---------------------------------------------- End Task
    return stream;
    };
};