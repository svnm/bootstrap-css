var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function () {
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['css']);
