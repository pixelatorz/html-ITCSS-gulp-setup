var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');


gulp.task('styles', function() {
    gulp.src('./sass/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('**/*.html',['styles']);

});

//Watch task
gulp.task('default', ['styles','connect', 'watch']);