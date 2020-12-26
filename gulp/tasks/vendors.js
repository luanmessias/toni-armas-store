// =========================================================
// Gulp Task: vendors
// Description: move all node and bower dependencies to dist
// easily add sass, less, etc. Operate on each as needed.
// basic configuration supplied
// npm install --save-dev merge-stream gulp-newer
// gulp-load-plugins
// =========================================================
var config              = require('../config.js'),
    merge               = require('merge-stream');

module.exports = function(gulp, plugins) {
    return function () {
// ---------------------------------------------- Start Task
// ---- move js files
    var js = 
    gulp.src(config.vendors.js.src)
        .pipe(plugins.newer(config.vendors.js.dest))
        .pipe(gulp.dest(config.vendors.js.dest));

// ---- move css files
    var css =
    gulp.src(config.vendors.css.src)
        .pipe(plugins.newer(config.vendors.css.dest))
        .pipe(gulp.dest(config.vendors.css.dest));

// ---- move font files
    var fonts =
    gulp.src(config.vendors.fonts.src)
        .pipe(plugins.newer(config.vendors.fonts.dest))
        .pipe(gulp.dest(config.vendors.fonts.dest));
        
// ---- sass
    // var sass =
    // gulp.src(config.vendors.sass.src)
    //     .pipe(plugins.newer(config.vendors.sass.dest))
    //     .pipe(gulp.dest(config.vendors.sass.dest));

// ---- less
    // var sass =
    // gulp.src(config.vendors.less.src)
    //     .pipe(plugins.newer(config.vendors.less.dest))
    //     .pipe(gulp.dest(config.vendors.less.dest));

// ------------------------------------------------ End Task
    return merge( js, css, fonts ); // add sass and/or less
    };
};