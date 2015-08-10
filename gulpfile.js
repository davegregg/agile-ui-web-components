var bs, gulp, sass, web;

bs = require('browser-sync').create();
gulp = require('gulp');
sass = require('gulp-sass');

gulp.task('default', [ 'web' ]);

gulp.task('dev', [ 'web', 'watch' ]);

gulp.task('sass', function () {
  return gulp.src('css/theme/source/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/theme'))
    .pipe(bs.stream());
});

gulp.task('watch', [ 'sass' ], function () {
  gulp.watch('css/theme/source/*.scss', [ 'sass' ]);
  gulp.watch('index.html', bs.reload);
});

gulp.task('web', function () {
  bs.init({
    server: {
      baseDir: './'
    },
    browser: 'google chrome canary'
  });
});
