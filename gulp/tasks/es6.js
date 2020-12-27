// =========================================================
// Gulp Task: ES6 
// Description: Transpile ES6 to ES5
// Dependencies: yarn add -D @babel/core @babel/preset-env gulp-babel
// =========================================================
var config = require('../config.js')
var babel = require('gulp-babel')

module.exports = function(gulp, plugins) {
    return function() {
    var stream = 
    // -------------------------------------------- Start Task
      gulp.src(config.es6.src)
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(gulp.dest(config.es6.dest));
    // ---------------------------------------------- End Task
    return stream;
    };
};