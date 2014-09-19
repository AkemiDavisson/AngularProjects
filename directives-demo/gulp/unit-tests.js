'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('test', function() {
  var bowerDeps = wiredep({
    directory: 'app/bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
        'app/bower_components/jquery/dist/jquery.min.js',
        'app/bower_components/angular/angular.min.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/styles/main.css',
        'app/scripts/**/*.js',
        'test/unit/**/*.js',

        'app/partials/**/*.html'
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: 'watch',
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
