define(['app', 'views/rootContent'],
  function(app, RootController) {
    'use strict';
    
    return {
      index: function() {
        console.log('RootController#index');
        app.mainContainer.pushView(new RootController(), true);
      }
    };
  }
);
