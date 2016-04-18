/**
 * Created by JounQin on 16/4/18.
 */

var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    htmlPostcss = require('.');

gulp.task('test1', function () {
    return gulp.src('test/src/test.html')
        .pipe(htmlPostcss({
            plugins: [autoprefixer({browsers: '> 0%'})],
            cheerio: {lowerCaseTags: false}
        }))
        .pipe(gulp.dest('test/dist'));
});

gulp.task('test2', function () {
    return gulp.src('test/src/test.html')
        .pipe(htmlPostcss([autoprefixer({browsers: '> 0%'})]))
        .pipe(gulp.dest('test/dist'));
});
