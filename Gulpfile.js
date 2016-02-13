var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var plugins = require('gulp-load-plugins')();
var packageInfo = require('./package.json');

var config = {
	input: {
		build: [
			'src/_easing.scss',
			'src/_elements.scss',
			'src/_entities.scss'
		]
	},
	output: {
		sass: "./dist/sass"
	}
};

gulp.task('build', function () {
	return gulp
		.src(config.input.build)
		.pipe(plugins.concat('sass-utility-variables.scss'))
		.pipe(plugins.header(fs.readFileSync('./banner.txt', 'utf8')))
		.pipe(plugins.header('@charset \'UTF-8\';\n\n'))
		.pipe(plugins.replace(/@version@/, packageInfo.version))
		.pipe(gulp.dest(config.output.sass));
});
