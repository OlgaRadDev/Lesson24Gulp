const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const removeFiles = require('gulp-remove-files');

const webserver = require('gulp-webserver');
const babel = require('gulp-babel');

gulp.task('clear', done => {
    gulp.src('./dist/*')
        .pipe(removeFiles());
    done();
});

gulp.task('stylesSass', done => {
    gulp.src('./css/main.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('./dist'));
    done();

});

gulp.task('webserver', done => {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            fallback: 'index.html',
            host: 'localhost',
            port: 8090,
            open: true
        }));
    done();
});

gulp.task('scripts', done => {
    gulp.src('./src/script.js')
        .pipe(babel({
            'presets':['env']
        }))
        .pipe(gulp.dest('./dist'));
    done();
});

gulp.task('watch', () => {
    gulp.watch('./css/main.scss', gulp.series('stylesSass'));
    gulp.watch('./src/script.js', gulp.series('scripts'));

});

gulp.task('default', gulp.series('clear','stylesSass', 'scripts', 'webserver'));