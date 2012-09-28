require.config({
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone'
  },
  shim: {
    'jquery': { exports: '$' },
    'underscore': { exports: '_' },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: function($, _) {
        $.noConflict();
        _.noConflict();
        return this.Backbone.noConflict();
      }
    }
  }
});

/*
 * Setup the app
 */
require(['jquery', 'backbone', 'appRouter', 'dispatcher' ],
  function($, Backbone, appRouter, dispatcher){
    $(document).ready(function() {

      Backbone.history.start({ pushState: true });

      // hook up navigate events
      dispatcher.on('navigate', function(route) {
        appRouter.navigate(route);
      });
    });
  }
);
