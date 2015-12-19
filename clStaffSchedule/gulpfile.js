// gulp
var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  es = require('event-stream'),
  fs = require('fs'),
  minifyHtml = require('gulp-minify-html'),
  minifyCSS = require('gulp-minify-css'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  header = require('gulp-header'),
  footer = require('gulp-footer'),
  templateCache = require('gulp-angular-templatecache');

var config = {
  pkg: JSON.parse(fs.readFileSync('./package.json')),
  banner: '/*!\n' +
    ' * <%= pkg.name %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
    ' * License: <%= pkg.license %>\n' +
    ' */\n\n\n'
};

// tasks

gulp.task('lint', function() {
  gulp.src(['./src/**/*.js', '!./src/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function(cb) {
  del(['dist/*'], ['force=true'], cb);
});

gulp.task('minify-css', function() {
  var opts = {
    comments: true,
    spare: true
  };
  gulp.src(['./src/**/*.css', '!./src/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('minify-js', function() {
  gulp.src(['./src/**/*.js', '!./src/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'));
  gulp.src(['./examples/**/*.js', '!./src/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('copy-bower-components', function() {
  gulp.src('./src/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
  gulp.src('./examples/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function() {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'));
  gulp.src('./examples/**/*.html')
    .pipe(gulp.dest('./dist/'));
});
gulp.task('copy-image-files', function() {
  gulp.src('./src/**/*.+(jpg|png)')
    .pipe(gulp.dest('./dist/'));
  gulp.src('./examples/**/*.+(jpg|png)')
    .pipe(gulp.dest('./dist/'));
});
gulp.task('serve', function() {
  connect.server({
    root: 'examples/',
    port: 8888
  });
});

gulp.task('serveDist', function() {
  connect.server({
    base: 'dist/',
    port: 9999
  });
});

gulp.task('scripts', ['clean'], function() {

  var buildTemplates = function() {
    return gulp.src('src/**/*.html')
      .pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe(templateCache({
        module: 'ui.select'
      }));
  };

  var buildLib = function() {
    return gulp.src(['src/*.js'])
      .pipe(plumber({
        errorHandler: handleError
      }))
      .pipe(concat('select_without_templates.js'))
      .pipe(header('(function () { \n"use strict";\n'))
      .pipe(footer('\n}());'))
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  };

  return es.merge(buildLib(), buildTemplates())
    .pipe(plumber({
      errorHandler: handleError
    }))
    .pipe(concat('clstaffschedule.js'))
    .pipe(header(config.banner, {
      timestamp: (new Date()).toISOString(),
      pkg: config.pkg
    }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(rename({
      ext: '.min.js'
    }))
    .pipe(gulp.dest('dist'));

});

gulp.task('styles', ['clean'], function() {

  return gulp.src('src/clstaffschedule.css')
    .pipe(header(config.banner, {
      timestamp: (new Date()).toISOString(),
      pkg: config.pkg
    }))
    .pipe(rename('clstaffschedule.css'))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCSS())
    .pipe(rename({
      ext: '.min.css'
    }))
    .pipe(gulp.dest('dist'));

});


// default task
gulp.task('default', ['lint', 'connect']);

// build task
gulp.task('build', ['lint'], function() {
  gulp.start('minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'copy-image-files');
});

gulp.task('buildDist', ['lint'], function() {
  gulp.start('minify-css', 'minify-js', 'scripts');
});

var handleError = function(err) {
  console.log(err.toString());
  this.emit('end');
};
