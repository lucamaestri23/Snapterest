var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var Babelify = require('babelify');


gulp.task('default', function() {
	return browserify('./source/app.js')
	.transform(Babelify)
	.bundle()
	.pipe(source('snapterst.js'))

	.pipe(gulp.dest('./build/'));
});

