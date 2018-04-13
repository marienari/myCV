const gulp = require('gulp')

// JSHINT

const jshint = require('gulp-jshint')

gulp.task('jshint', function() {
	gulp
		.src('*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
})

// SASS + rename + sourcemaps + minify css + autoprefixer + plumber

const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const minifycss = require('gulp-minify-css')
const plumber = require('gulp-plumber')

gulp.task('sass', function() {
	return gulp
		.src('src/main.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}))
		.pipe(minifycss())
		.pipe(autoprefixer({browsers: ['last 3 versions'], cascade: false}))
		.pipe(sourcemaps.write())
		.pipe(rename('out.css'))
		.pipe(gulp.dest('dist'))
})

// WATCHDOG

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['jshint'])
	gulp.watch('src/*.jsx', ['jshint'])
	gulp.watch('src/*/*.scss', ['sass'])
	gulp.watch('src/*.scss', ['sass'])
})
