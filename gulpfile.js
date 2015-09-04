var apidoc = require('gulp-apidoc');
var gulp = require('gulp');
var mocha = require('gulp-mocha');

/**
 * Store all needed paths here.
 */
var paths = {
  apidoc: './apidoc/',
  src: './src',
  test_js: './test/**/*.js'
};

/**
 * Generate API documentation
 */
gulp.task('apidoc', function (cb) {
  apidoc.exec({
    src: paths.src,
    dest: paths.apidoc
  }, cb);
});

/**
 * Run mocha
 */
gulp.task('mocha', function () {
  return gulp.src(paths.test_js).pipe(mocha());
});

/**
 * Run all tests
 */
gulp.task('test', ['mocha', 'apidoc']);

/**
 * Run all tasks
 */
gulp.task('default', ['apidoc', 'test']);

