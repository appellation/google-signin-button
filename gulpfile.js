const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const del = require('del');

gulp.task('default', () => {
  del.sync(['dist/**', '!dist']);

  return gulp.src('./sass/buttons/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('buttons.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});
