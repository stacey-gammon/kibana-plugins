const fs =  require('fs');
const yml = require('js-yaml');
const gulp = require('gulp');
const debug = require('gulp-debug');
const glob = require('glob');
const watch = require('gulp-watch');

const readYaml = (path) => yml.safeLoad(fs.readFileSync(path, 'utf8'));
const kibanaDir = readYaml('./config.dev.yml')['kibana.dir'];

gulp.task('copy-plugins', function (done) {
   glob('./plugins/**/*/kibana.json', {}, async function (er, files) {
    const promises = files.map(file => {
      return new Promise((resolve, reject) => {
        const pluginDir = file.substring(0, file.indexOf('kibana.json'));
        const pluginGlob = pluginDir + '**/*';
        return gulp.src(pluginGlob, {
          base: pluginDir + '/..'
        })
        .pipe(debug())
        .pipe(gulp.dest(`${kibanaDir}/plugins`))
        .on("end", resolve);
      });
    });
    await Promise.all(promises);
    done();
  });
});

gulp.task('default', gulp.series('copy-plugins', function () { 
  return watch('plugins/**/*', gulp.series('copy-plugins', function (done) { done(); }));
}));
