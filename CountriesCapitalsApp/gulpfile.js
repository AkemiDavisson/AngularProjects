var gulp = require('gulp'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	minifyHtml = require('gulp-minify-html'),
	minifyCss = require('gulp-minify-css'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	rimraf = require('gulp-rimraf'); //replaces gulp-clean?
	ngAnnotate = require('gulp-ng-annotate');



// gulp.task('default', function () {
//     return gulp.src('src/app.js')
//         .pipe(ngAnnotate())
//         .pipe(gulp.dest('dist'));
// });

