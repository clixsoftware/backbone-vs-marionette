/*
 * Router for the site. Defines the actions to be taken when the pushState (url) changes
 */
define(['jquery', 'underscore', 'backbone', 'dispatcher', 'views/navMenu'],
  function($, _, Backbone, dispatcher, NavMenu) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        '': 'root',
        '/users': 'users'
      },

      root: function() {
        // init the view
        var navMenu = new NavMenu({ el: $('.nav-menu')});
        navMenu.initDropdowns();
      },

      users: function() {
        
      }
    });

    return new AppRouter();
  }
);
