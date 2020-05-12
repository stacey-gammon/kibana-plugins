require('./scripts/sync');

const gulp = require('gulp');
const watch = require('gulp-watch');
const { kibanaDir } = require('./scripts/get_kibana_dir');

gulp.task('default', gulp.series(['sync-there', 'sync-here'], function () { 
  return watch([
    `${kibanaDir}/plugins/**/*`,
    `!${kibanaDir}/plugins/*/target/**/*`
    ]).on('change', function (file) {
      console.log('Copying over: ', file);
      gulp.src(file, { base: `${kibanaDir}/plugins/` })
        .pipe(gulp.dest(`./plugins`));
    });
}));
