var apidoc = require('gulp-apidoc');
var Bluebird = require('bluebird');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var Sequelize = require('sequelize');
var Umzug = require('umzug');

/**
 * Store all needed paths here.
 */
var paths = {
  apidoc: './apidoc/',
  config_json: __dirname + '/config/config.json',
  migrations: __dirname + '/src/migrations',
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
 * Run all pending migrations the same way as running
 * sequelize db:migrate --migrations-path src/migrations
 */
gulp.task('migrate', function () {
  var env = process.env.NODE_ENV || 'development';
  var config = require(paths.config_json)[env];
  config.logging = false;

  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

  var migrator = new Umzug({
    logging: console.log,
    storage: 'sequelize',
    storageOptions: {
      sequelize: sequelize,
      tableName: 'SequelizeMeta'
    },
    migrations: {
      params: [sequelize.getQueryInterface(), Sequelize],
      path: paths.migrations,
      pattern: /\.js$/,
      wrap: function (fun) {
        if (fun.length === 3) {
          return Bluebird.promisify(fun);
        } else {
          return fun;
        }
      }
    }
  });

  return migrator.up();
});

/**
 * Run mocha tests
 * - migrate: migrate database to match the codebase
 */
gulp.task('mocha', ['migrate'], function () {
  return gulp.src(paths.test_js).pipe(mocha());
});

/**
 * Run all tests
 * - mocha: run mocha tests
 * - apidoc: try to generate api documentation
 */
gulp.task('test', ['mocha', 'apidoc']);

/**
 * Run all tasks
 */
gulp.task('default', ['test']);

