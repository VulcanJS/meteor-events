Package.describe({
  name: 'telescope:events',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Internal event tracking for Meteor apps',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/TelescopeJS/meteor-events.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use(['underscore', 'mongo']);
  api.addFiles('events.js');
  api.export('Events');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('events');
  api.addFiles('events-tests.js');
});
