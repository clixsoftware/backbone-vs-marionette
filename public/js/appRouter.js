/*
 * Router for the site. Defines the actions to be taken when the pushState (url) changes
 */
define(['jquery',
  'underscore',
  'backbone',
  'views/navMenu',
  'controllers/rootController',
  'controllers/userController'],
  function($, _, Backbone, NavMenu, rootController, userController) {

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
        this.navMenu = new NavMenu({ el: $('.nav-menu')});
        this.navMenu.initDropdowns();
      },

      root: function() {
        console.log('root');
        rootController.showRoot();
      },

      users: function(query) {
        console.log('users');
        userController.showUsersGrid();
      },

      user: function(id) {
        console.log('user details: ' + id);
        userController.showUserDetails(id);
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

    return new AppRouter();
  }
);
