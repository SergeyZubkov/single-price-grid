var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function(done) {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(["src/*.html", "src/*.css"]).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));