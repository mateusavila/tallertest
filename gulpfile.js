var gulp = require('gulp');
var pkg = require('./package.json');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var livereload = require('gulp-livereload');
var zip = require('gulp-zip');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var ftp = require('gulp-ftp');
var minifyCSS = require('gulp-minify-css');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');



var browserSync = require('browser-sync');
var reload = browserSync.reload;
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost/cafe/playlist",
		ghostMode: {
			clicks: true,
			location: true,
			forms: true,
			scroll: true
		} 
    });
});



// lint js
gulp.task('lint', function(){
	gulp.src('./src-js/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
});


// concatenar e minificar
gulp.task('minify', function(){
	gulp.src(['./src-js/plugins.js', './src-js/handlers.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./js'))
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('./js'))
		.pipe(livereload())
		.pipe(reload({stream:true}));
});

// less
gulp.task('stylus', function () {
	gulp.src('./src-css/style.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(concat('style.css'))
		.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./css'))
		.pipe(livereload())
		.pipe(reload({stream:true}));
});



// zipar projeto
gulp.task('zip', function(){
	gulp.src(['./js/', './css/', './*.php', './img/', './fonts/']).pipe(zip('projeto.zip'))
	.pipe(gulp.dest('./'));
});

// salvando arquivo php e html
gulp.task('php', function(){  
	gulp.src('*.php')
		.pipe(livereload())
		.pipe(reload({stream:true}));
});

// salvando arquivo php e html
gulp.task('html', function(){  
	gulp.src('./*.html')
		.pipe(livereload())
		.pipe(reload({stream:true}));
});



gulp.task('watch', function(){
	livereload.listen(35729);
	gulp.watch('./src-css/*.styl', ['stylus']);
	gulp.watch('./src-js/*.js', ['lint', 'minify']);
	gulp.watch('*.html', ['html']);
	gulp.watch('*.php', ['php']);

});

gulp.task('default', ['watch']);
gulp.task('full', ['watch', 'browser-sync']);
