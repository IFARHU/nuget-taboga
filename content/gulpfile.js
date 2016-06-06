﻿"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    minifyCSS = require('gulp-minify-css'),
    bower = require('gulp-bower');

var paths = {
    Scripts: [
        './bower_components/jquery-sparkline/jquery.sparkline.min.js',
        './bower_components/select2/select2.min.js',
        './bower_components/jquery-validation/dist/jquery.validate.min.js',
        './Scripts/taboga.js'
    ],
    main_scss: './Content/main.scss'
};

gulp.task('bower', function () {
    return bower('./bower_components/');
});

gulp.task('taboga-scss', function () {
    return gulp.src(paths.main_scss)
        .pipe(concat('app-min.css'))
        .pipe(sass())
        .pipe(minifyCSS({ keepBreaks: false }))
        .pipe(gulp.dest('./Content/'))
});

gulp.task('taboga-js', ['bower'], function () {
    return gulp.src(paths.Scripts)
        .pipe(concat('app-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./Scripts/'))
});

gulp.task('watch', function () {
    gulp.watch(['./Scripts/**/*'], ['main-js']);
    gulp.watch(['./Content/**/*'], ['main-scss']);
});

gulp.task('run_all', ['bower', 'taboga-scss', 'taboga-js']);