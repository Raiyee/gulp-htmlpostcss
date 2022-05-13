# gulp-htmlpostcss
Gulp plugin to process CSS within the `<style>` tags and inline `style=` attributes in your HTML using [html-postcss](https://github.com/Rebelmail/html-postcss).

#Usage

``` JavaScript
// gulpfile.js

var gulp = require('gulp'),
    htmlPostcss = require('gulp-htmlpostcss'),
    autoprefixer = require('autoprefixer');

// if you just want to use postcss processors with default options
gulp.task('task1', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlPostcss(processors))
        .pipe(gulp.dest('dist'));
});

// if you want to use cheerioOpts or postcssOpts at the same time
gulp.task('task1', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlPostcss({
            plugins: processors,
            cheerio: cheerioOpts,
            postcss: postcssOpts
        }))
        .pipe(gulp.dest('dist'));
});
```
