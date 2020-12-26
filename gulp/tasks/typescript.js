// =========================================================
// Gulp Task: typescript
// Description: Transpile .ts files and add sourcemaps
// npm install --save-dev gulp-typescript gulp-sourcemaps gulp-load-plugins
// =========================================================
var config = require('../config.js');

module.exports = function (gulp, plugins) {
    return function () {
        var stream =
            // -------------------------------------------- Start Task
            gulp.src(config.typescript.src)
                .pipe(plugins.sourcemaps.init())
                .pipe(plugins.typescript(config.typescript.opts));

        // ---------------------------------------------- End Task
        return stream.js.pipe(plugins.sourcemaps.write('.')).pipe(gulp.dest(config.typescript.dest));
    };
};