const gulp = require('gulp');
const sassdoc = require('sassdoc');

const paths = {
  sassdoc: {
    src: './src/**/*.scss',
    dest: './docs',
    description: './README.md'
  }
};

gulp.task('sassdoc', function () {
  const options = {
    dest: paths.sassdoc.dest,
    exclude: [
      './src/helpers/_errors.scss'
    ],
    theme: 'default',
    package: './package.json',
    autofill: ['content'],
    groups: {
      'helpers-string': 'Helpers — String',
      'modules-error': 'Modules — Error',
      'modules-theme': 'Modules — Theme',
    },
    'no-update-notifier': false,
    verbose: false,
    strict: false,
    verbose: true,
    display: {
      access: ['public'],
      alias: true,
      watermark: true,
    },
    basePath: 'https://github.com/gmvqbu/duo',
    // shortcutIcon: '',
    sort: [
      'access',
      'group',
      'line',
    ],
    descriptionPath: paths.sassdoc.description
  };

  return gulp.src(paths.sassdoc.src)
    .pipe(sassdoc(options));
});