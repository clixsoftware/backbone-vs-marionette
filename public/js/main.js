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
 'controllers/userController'], function($, Backbone, appRouter, dispatcher, rootController, userController){
    $(document).ready(function() {
      rootController.initEvents(appRouter);
      userController.initEvents(appRouter);
      Backbone.history.start({ pushState: true });
    });
  }
);
