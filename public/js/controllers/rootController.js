define(['app', 'vent', 'views/rootContent', 'controllers/navigate'],
  function(app, vent, RootController, navigate) {
    'use strict';
    
    var controller = {
      index: function() {
        console.log('RootController#index');
        app.mainContainer.pushView(new RootController(), true);
      }
    };

    vent.bind('navigate:root:index', navigate('/users', controller.users));

    return controller;
  }
);
