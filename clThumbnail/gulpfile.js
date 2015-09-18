// gulp
var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  del = require('del');

// tasks

gulp.task('lint', function() {
  console.log('abcabcacbacbacbacb');
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

// default task
gulp.task('default', ['lint', 'connect']);
// build task
gulp.task('build', ['lint'], function() {
  console.log('teststessts');
  gulp.start('minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'copy-image-files');
});

// gulp.task('build',  ['clean'], function(){
//   console.log('teststessts');
// 	gulp.start('lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'copy-image-files');
// });

function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}
