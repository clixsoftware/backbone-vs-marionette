/*
 * Router for the site. Defines the actions to be taken when the pushState (url) changes
 */
define(['jquery',
  'underscore',
  'backbone',
  'dispatcher',
  'views/mainContainer',
  'views/navMenu',
  'views/rootContent'],
  function($, _, Backbone, dispatcher, MainContainer, NavMenu, RootContent) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        '': 'root',
        'users*query': 'users',
        'reports': 'reports'
      },

      initialize: function() {
        // main.js may be a better location for these kind of inits
        this.mainContainer = new MainContainer($('#main-container'));
        this.navMenu = new NavMenu({ el: $('.nav-menu')});
        this.navMenu.initDropdowns();
      },

      root: function() {
        var rootContent = new RootContent();
        this.mainContainer.showView(rootContent);
      },

      users: function(query) {
        console.log('users');
      },

      reports: function() {
        console.log('reports');
      }
    });

    return AppRouter;
  }
);
