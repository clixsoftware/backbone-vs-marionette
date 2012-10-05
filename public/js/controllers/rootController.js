define(['dispatcher',
  'views/mainContainer',
  'views/rootContent'],
  function(dispatcher, mainContainer, RootContent) {

    var RootController = function() {};

    var proto = {
      initEvents: function(router) {
        dispatcher.on('navigate.root.index', function() {
          this.showRoot();
          router.navigate('/');
        }, this);
      },

      showRoot: function() {
        var rootContent = new RootContent();
        mainContainer.pushView(rootContent, true);
      }
    };

    RootController.prototype = proto;
    return new RootController();
  }
);
