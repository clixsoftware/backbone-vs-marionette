/*
 * Router for the site. Defines the actions to be taken when the pushState (url) changes
 */
define(['jquery',
  'underscore',
  'backbone',
  'dispatcher',
  'views/mainContainer',
  'views/navMenu',
  'views/rootContent',
  'views/usersContent'],
  function($, _, Backbone, dispatcher, MainContainer, NavMenu, RootContent, UsersContent) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        '': 'root',
        'users/:id': 'user',
        'users*query': 'users',
        'admins*query': 'admins',
        'customers*query': 'admins',
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
        this.mainContainer.pushView(rootContent, true);
      },

      users: function(query) {
        console.log('users');
        var usersList = new UsersContent.UsersList();
        var router = this;
        usersList.fetch({
          success: function(collection, response) {
            var usersGridView = new UsersContent.UsersGridView({
              collection: collection
            });
            router.mainContainer.pushView(usersGridView, true);
          },
          error: function(collection, xhr) {
            // ignore error
          }
        });
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
