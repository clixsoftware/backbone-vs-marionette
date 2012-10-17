require(['require', 'mocha'], function(require, mocha) {
  mocha.setup('bdd');
  var tests = [
    'tests/modelTests'
  ];

  require(tests, function() {
    mocha.run();
  });
});