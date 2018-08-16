const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const browserSync = require('browser-sync').create();



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
    	watch: true,
        server: "src",
        notify: true
    });

    browserSync.watch('src/**/*.css').on('change', function (file) {
    browserSync.notify(file + ' changed');
});
    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch('src/**/*').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

