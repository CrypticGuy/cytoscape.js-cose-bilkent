// meteor package.js definition

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: ':cytoscape-cose-bilkent',
  version: packageJson.version,
  summary: packageJson.description,
  git: packageJson.repository.url,
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('maxkfranz:cytoscape@2.4.0');
  // api.use('jquery'); // uncomment if jquery is a dependency

  api.addFiles([
    'cytoscape-cose-bilkent.js'
  ]);
});

Package.onTest(function(api) {
  api.use('maxkfranz:cytoscape');
  api.use(':cytoscape-cose-bilkent');
  api.use('tinytest');

  // define your test files here if you like
  // api.addFiles('test-meteor.js');
});
