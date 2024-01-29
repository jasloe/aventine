var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass')(require('sass'));
var babel = require('gulp-babel');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var config = require("./config");

// Task for compiling all SCSS files except the specific one for the homepage
gulp.task('sass', function () {
  return gulp.src(['./scss/**/*.scss', '!./scss/components/swiper.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      noCache: true,
      outputStyle: "compressed",
      lineNumbers: false,
      loadPath: './css/*',
      sourceMap: true
    })).on('error', function (error) {
      gutil.log(error);
      this.emit('end');
    })
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'))
    .pipe(notify({
      title: "SASS Compiled",
      message: "All SASS files have been recompiled to CSS.",
      onLast: true
    }));
});

// Task for compiling the specific homepage SCSS file
gulp.task('compile-swiper-styles', function () {
  return gulp.src('./scss/components/swiper.scss') // Path to the specific SCSS file
    .pipe(sourcemaps.init())
    .pipe(sass({
      noCache: true,
      outputStyle: "compressed",
      lineNumbers: false,
      loadPath: './css/*',
      sourceMap: true
    })).on('error', function (error) {
      gutil.log(error);
      this.emit('end');
    })
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css')) // Destination for the compiled CSS file
    .pipe(notify({
      title: "Homepage SASS Compiled",
      message: "Homepage SCSS file has been compiled to CSS.",
      onLast: true
    }));
});

// Task for minifying JavaScript
gulp.task('compress', function () {
  return gulp.src('./js/js-src/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .on('error', function (err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
      this.emit('end');
    })
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./js'))
    .pipe(notify({
      title: "JS Transpiled and Minified",
      message: "All JS files in the theme have been transpiled and minified.",
      onLast: true
    }));
});

// Drush cache clear tasks
gulp.task('drush:cc', function () {
  if (!config.drush.enabled) {
    return;
  }
  return gulp.src('', {read: false})
    .pipe(shell([config.drush.alias.css_js]))
    .pipe(notify({
      title: "Caches cleared",
      message: "Drupal CSS/JS caches cleared.",
      onLast: true
    }));
});

gulp.task('drush:cr', function () {
  if (!config.drush.enabled) {
    return;
  }
  return gulp.src('', {read: false})
    .pipe(shell([config.drush.alias.cr]))
    .pipe(notify({
      title: "Cache rebuilt",
      message: "Drupal cache rebuilt.",
      onLast: true
    }));
});

// Browser Sync task
gulp.task('browser-sync', function () {
  browserSync.init({
    files: ['css/**/*.css', 'js/*.js'],
    port: config.browserSync.port,
    proxy: config.browserSync.hostname,
    open: config.browserSync.openAutomatically,
    reloadDelay: config.browserSync.reloadDelay,
    injectChanges: config.browserSync.injectChanges
  });
});

gulp.task('reload', function () {
  browserSync.reload();
});

// Task for flushing Drupal cache specifically for twig template changes
gulp.task('flush', function () {
  runSequence('drush:cr', 'reload');
});

// Watcher tasks
gulp.task('watch', function () {
  gulp.watch(['scss/**/*.scss', '!./scss/components/swiper.scss'], ['sass', 'drush:cc']);
  gulp.watch(['scss/components/swiper.scss'], ['compile-swiper-styles', 'drush:cc']);
  gulp.watch(['js/js-src/**/*.js'], ['compress', 'drush:cc']);
  if (!config.twig.useCache) {
    gulp.watch(['templates/**/*.html.twig', '*.theme'], ['drush:cc']);
  }
});

gulp.task('default', ['watch', 'browser-sync', 'compile-swiper-styles']);
