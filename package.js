Package.describe({
  name: 'comerc:bs-datetimepicker',
  summary: 'Bootstrap 3 DateTimePicker-widget (v4 dev-branch)',
  version: '1.1.0',
  git: 'https://github.com/comerc/meteor-bs-datetimepicker.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('jquery', 'client');
  api.use('momentjs:moment@2.8.4', 'client');
  api.addFiles([
    'bootstrap-datetimepicker.css',
    'bootstrap-datetimepicker.js',
  ], 'client');
});
