require(
  ['jquery', 'app', 'backbone', 'views/navMenu', 'routers/rootRouter', 'controllers/rootController',
    'routers/userRouter', 'controllers/userController'],
  function($, app, Backbone, NavMenuView, RootRouter, rootController,
    UserRouter, userController) {
    "use strict";

    app.addRegions({
      navMenu: '.header-navbar',
      mainContainer: '.main-container > .frames'
    });

    app.addInitializer(function() {
      var navMenuView = new NavMenuView({ el: $('.nav-menu') });
      navMenuView.initDropdowns();
      app.navMenu.attachView(navMenuView);
    });

    $(document).ready(function() {
      app.start();
      new RootRouter({ controller: rootController });
      new UserRouter({ controller: userController });

      Backbone.history.start({pushState: true});
    });

  }
);
