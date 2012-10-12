var require = {
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
    'bootstrap': ['jquery'],
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
};
