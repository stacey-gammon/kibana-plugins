const gulp = require('gulp');
const gulpDebug = require('gulp-debug');

const { kibanaDir } = require('./get_kibana_dir');

gulp.task('sync-there', function () {
  return gulp.src('./plugins/**/*')
  .pipe(gulp.dest(`${kibanaDir}/plugins`));
});

gulp.task('sync-here', function () {
  return gulp.src([
    `${kibanaDir}/plugins/**/*`, 
    `!${kibanaDir}/plugins/**/target`,
    `!${kibanaDir}/plugins/**/target/**`])
  .pipe(gulpDebug())
  .pipe(gulp.dest('./plugins'));
});