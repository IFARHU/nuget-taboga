var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");
    sass = require("gulp-sass"),
    minifyCSS = require('gulp-minify-css');
    bower = require('gulp-bower');

var paths = {
    bowerDir: './bower_components/',
    Scripts: [
        './bower_components/jquery-sparkline/dist/jquery.sparkline.js',
        './bower_components/select2/select2.min.js',
        './bower_components/select2/select2_locale_es.js',
        './bower_components/jquery-validation/dist/jquery.validate.min.js',
        './Scripts/taboga.js'
    ],
    main_scss: './Content/main.scss',
    Style: ['./bower_components/select2/select2.css']
};

gulp.task('bower', function () {
    return bower('./bower_components/');
});

gulp.task('font', ['bower'], function () {
    return gulp.src(paths.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./fonts'));
});

gulp.task('taboga-scss', ['bower'], function () {
    return gulp.src(paths.main_scss)
        .pipe(concat('app-min.css'))
        .pipe(sass())
        .pipe(minifyCSS({ keepBreaks: false }))
        .pipe(gulp.dest('./Content/'));
});

gulp.task('taboga-js', ['bower'], function () {
    return gulp.src(paths.Scripts)
        .pipe(concat('app-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./Scripts/'));
});

gulp.task('watch', function () {
    gulp.watch(['./Scripts/**/*'], ['main-js']);
    gulp.watch(['./Content/**/*'], ['main-scss']);
});

gulp.task('run_all', ['bower', 'font', 'taboga-scss', 'taboga-js']);