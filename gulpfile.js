var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function () {
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['css']);
