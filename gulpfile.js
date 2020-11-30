const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
    gulp.src('style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('watch', function() {
    gulp.watch('style.css', gulp.series(['default']));
})