/*
 * Router for the site. Defines the actions to be taken when the pushState (url) changes
 */
define(['jquery',
  'underscore',
  'backbone',
  'dispatcher',
  'views/mainContainer',
  'views/navMenu'],
  function($, _, Backbone, dispatcher, mainContainer, NavMenu) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        '': 'root',
        'users/:id': 'user',
        'users*query': 'users',
        'admins*query': 'admins',
        'customers*query': 'admins',
        'reports': 'reports'
      },

      initialize: function(options) {
        this.userController = options.userController;
        this.rootController = options.rootController;
        this.mainContainer = mainContainer;
        this.navMenu = new NavMenu({ el: $('.nav-menu')});
        this.navMenu.initDropdowns();
      },

      root: function() {
        console.log('root');
        this.rootController.showRoot();
      },

      users: function(query) {
        console.log('users');
        this.userController.showUsersGrid();
      },

      user: function(id) {
        console.log('user details: ' + id);
      },

      admins: function(query) {
        console.log('admins');
      },

      customers: function(query) {
        console.log('customers');
      },

      reports: function() {
        console.log('reports');
      }
    });

    return AppRouter;
  }
);
