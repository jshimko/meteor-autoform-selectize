Package.describe({
  name: 'autoform-selectize',
  summary: 'Custom Selectize input type for AutoForm',
  version: '0.1.0',
  git: 'https://github.com/jshimko/meteor-autoform-selectize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use([
    'templating',
    'blaze',
    'aldeed:autoform',
    'jeremy:selectize'
  ]);

  api.imply('jeremy:selectize');

  api.addFiles([
    'autoform-selectize.html',
    'autoform-selectize.js',
    'autoform-selectize-input.html',
    'autoform-selectize-input.js'
  ], 'client');
});
