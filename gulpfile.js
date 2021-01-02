// =========================================================
// Project: PROJECT-NAME
// NOTE: Using Gulp 4
// npm install --save-dev gulp-load-plugins gulpjs/gulp.git#4.0
// =========================================================
var gulp 		= require('gulp'),
	config		= require('./gulp/config'),
	plugins		= require('gulp-load-plugins')();

// ---------------------------------- Gulp Terminal Commands
// ---- gulp
// ---- gulp build
// ---- gulp new-task

// --------------------function to get tasks from gulp/tasks
function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp, plugins);
}

// ---------------------------------------------- Gulp Tasks
gulp.task('sass',       getTask('sass'));
gulp.task('scripts',    getTask('scripts'));
gulp.task('styles',     getTask('styles'));
gulp.task('ts',         getTask('typescript'));
gulp.task('es6',        getTask('es6'));
gulp.task('new-task',   getTask('new-task'));
gulp.task('sync',       getTask('browsersync'));
gulp.task('clean',      getTask('clean'));
gulp.task('moveDist',   getTask('move-dist'));
gulp.task('vendors',    getTask('vendors'));
gulp.task('html',       getTask('html'));
gulp.task('watch',      getTask('watch'));
gulp.task('upload',     getTask('s3_upload'));

// --------------------------------------- Compile Gulp Task
gulp.task('default', gulp.series(
	gulp.parallel('es6', 'sass'),
	gulp.parallel('scripts', 'styles'),
	gulp.parallel('clean')
));

// --------------------------------------- Compile Gulp Task
gulp.task('upload', gulp.series(
	gulp.parallel('upload')
));


gulp.task('build', gulp.series(
	gulp.parallel('es6', 'sass'),
	gulp.parallel('scripts', 'styles'),
	gulp.parallel('clean', 'upload')
));


// =========================================================
// Basic example of gulp multifile tasks folder structure
// =========================================================
// **** Project-Directory/
// ------ gulpfile.js
// ****** src/
// ****** dist/
// ****** gulp/
// -------- config.js
// ******** tasks/
// ******** utils/
// ----------- newTaskTemplate.js