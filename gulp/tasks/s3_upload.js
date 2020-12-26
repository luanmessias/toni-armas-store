
// =========================================================
// Gulp Task: moveDist
// Description: move dist folder to external folder. Useful
// for multirepo projects. e.g. a gh-pages-site.
// npm install --save-dev gulp-load-plugins
// =========================================================

var gulp = require('gulp');
var config = require('../config.js');
var s3 = require('gulp-s3-upload')(s3_access)

var s3_access = {
  accessKeyId: process.env.AWS_S3_TONI_ARMAS_STORE_USER,
  secretAccessKey: process.env.AWS_S3_TONI_ARMAS_STORE_PASSWORD
}


module.exports = function (gulp, plugins) {
  return function () {
    var stream =
      // -------------------------------------------- Start Task
      gulp.src("./public/**")
        .pipe(s3({
          Bucket: 'loja-toni-armas',
          ACL: 'public-read'
        }, {
          maxRetries: 5
        }));
    // ---------------------------------------------- End Task
    return stream;
  };
};