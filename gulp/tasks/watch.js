// =========================================================
// Gulp Task: newTask
// Description: creates a new multifile task template
// Dependencies: npm install gulp-rename gulp-load-plugins
// =========================================================
var config = require('../config.js');
var { watch } = require('gulp');

module.exports = function (gulp, plugins) {
  return function () {
    var stream =
      // -------------------------------------------- Start Task
      watch('./src', gulp.registry().get('default'))
      watch('./public', gulp.registry().get('upload'))
    // ---------------------------------------------- End Task
    return stream;
  };
};