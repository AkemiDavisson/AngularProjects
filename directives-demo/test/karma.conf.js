'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
        'app/bower_components/jquery/dist/jquery.min.js',
        'app/bower_components/angular/angular.min.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/styles/main.css',
        'app/scripts/**/*.js',
        'app/partials/**/*.html',
        'test/unit/**/*.js'
    ],

    autoWatch : true,

    singleRun: true,

    preprocessors: {
        'app/partials/**/*.html': 'html2js'
    },

    ngHtml2JsPreprocessor: {
        stripPrefix: 'app/',
        
        moduleName: 'my.templates'
    },

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-ng-html2js-preprocessor'
    ]
  });

};
