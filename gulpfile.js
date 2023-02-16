'use strict'

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function defaultTask(cb) {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/dist'));
}

exports.default = defaultTask

exports.watch = function () {
    gulp.watch('./src/styles/*.less', gulp.series('default'))
}