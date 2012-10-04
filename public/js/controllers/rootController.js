define(['views/mainContainer', 'views/rootContent'], function(mainContainer, RootContent) {
  var RootController = function() {};

  RootController.prototype.showRoot = function() {
    var rootContent = new RootContent();
    mainContainer.pushView(rootContent, true);
  };

  return RootController;
});
