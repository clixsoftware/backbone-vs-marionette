require.config({
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    bootstrap: 'vendor/bootstrap',
    eventbinder: 'vendor/backbone.eventbinder',
    wreqr: 'vendor/backbone.wreqr',
    marionette: 'vendor/backbone.marionette'
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
        _.templateSettings = {
          interpolate: /\{\{=(.+?)\}\}/g,
          evaluate: /\{\{(.+?)\}\}/g
        };
        return Backbone;
      }
    },
    'eventbinder': ['backbone'],
    'wreqr': ['eventbinder'],
    'marionette': ['wreqr']
  }
});

/*
 * Setup the app
 */
require(
  ['app', 'backbone', 'routers/rootRouter', 'controllers/rootController'],
  function(app, Backbone, RootRouter, rootController) {
    "use strict";

    app.start();
    new RootRouter({
      controller : rootController
    });
    Backbone.history.start();
  }
);
