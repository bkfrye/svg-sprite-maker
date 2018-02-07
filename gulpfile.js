var cheerio = require('gulp-cheerio'),
	gulp = require('gulp'),
	rename = require('gulp-rename'),
	svgmin = require('gulp-svgmin'),
	svgstore = require('gulp-svgstore');

// Make SVG sprite
function makeSvgSprite() {
    return function() {
		return gulp.src('./SVG/*.svg')
		    .pipe(svgmin())
		    .pipe(rename({
		        prefix: "svg-"
		    }))
		    .pipe(svgstore())
		    .pipe(cheerio({
		        run: function($){
		            $('[fill]').removeAttr('fill');
					$('svg').attr('style',  'display:none');
		        },
		        parserOptions: { xmlMode: true }
		    }))
			.pipe(rename({
				basename: "sprite",
				extname: ".svg"
			}))
		    .pipe(gulp.dest('.'))
    };
}

// SVG task
gulp.task('svg', makeSvgSprite());

// Starts gulp
gulp.task('default', ['svg']);
