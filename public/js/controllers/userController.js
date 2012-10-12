define(['vent', 'backbone'],
  function(vent, Backbone) {

    var controller = {
      users: function(query) {
        console.log('users');
        // userController.showUsersGrid();
      },

      user: function(id) {
        console.log('user details: ' + id);
        // userController.showUserDetails(id);
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
    };

    /*
     * Curries the call through to the controller action, passing arguments through
     * Navigates to the given url first.
     */
    var navigate = function(url, action) {
      return function() {
        Backbone.history.navigate(url);
        action.apply(arguments);
      };
    };

    vent.bind('navigate:user:index', navigate('/users', controller.users));
    vent.bind('navigate:admin:index', navigate('/admins', controller.admins));
    vent.bind('navigate:customer:index', navigate('/customers', controller.customers));

    return controller;
  }
);
