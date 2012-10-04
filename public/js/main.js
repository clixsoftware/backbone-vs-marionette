require.config({
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    bootstrap: 'vendor/bootstrap'
  },
  shim: {
    'jquery': { exports: '$' },
    'bootstrap': { deps: ['jquery'] },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: function($, _) {
        $.noConflict();
        _.noConflict();
        _.templateSettings = {
          interpolate: /\{\{=(.+?)\}\}/g,
          evaluate: /\{\{(.+?)\}\}/g
        };
        return this.Backbone.noConflict();
      }
    }
  }
});

/*
 * Setup the app
 */
require(['jquery',
 'backbone',
 'appRouter',
 'dispatcher',
 'controllers/rootController',
 'controllers/userController'], function($, Backbone, AppRouter, dispatcher, RootController, UserController){
    $(document).ready(function() {

      // create the router, start tracking
      var appRouter = new AppRouter({
        userController: new UserController(),
        rootController: new RootController()
      });

      Backbone.history.start({ pushState: true });

      // hook up navigate events
      dispatcher.on('navigate', function(options) {
        appRouter.navigate(options.route, { trigger: true });
      });
    });
  }
);
