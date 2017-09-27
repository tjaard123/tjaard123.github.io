var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', ['concat:css', 'concat:js']);

gulp.task('concat:css', function() {
  gulp
    .src([
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/font-awesome/css/font-awesome.min.css',
      './css/main.css',
      './css/web.css',
      './css/mobile.css'
    ])
    .pipe($.concat('compiled.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat:js', function() {
  gulp
    .src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/angular/angular.min.js',
      './node_modules/angular-route/angular-route.min.js',
      './node_modules/angulartics/dist/angulartics.min.js',
      './node_modules/angulartics-google-analytics/dist/angulartics-ga.min.js',
      './js/marked.min.js',
      './js/blog.js'
    ])
    .pipe($.concat('compiled.js'))
    .pipe(gulp.dest('./js'));
});
