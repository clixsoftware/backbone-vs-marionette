define([
  'app',
  'vent',
  'backbone',
  'controllers/navigate',
  'views/usersGridView',
  'models/usersList',
  'views/userDetailsView'],

  function(app, vent, Backbone, navigate, UsersGridView, UsersList, UserDetailsView) {

    var controller = {
      users: function(query) {
        console.log('users');
        var usersList = new UsersList();
        var usersGridView = new UsersGridView({ collection: usersList });
        app.mainContainer.pushView(usersGridView, true);
        usersList.fetch();
      },

      user: function(user) {
        console.log('user details: ' + user.id);
        var view = new UserDetailsView({model: user});
        app.mainContainer.pushView(view);
      },

      closeDetails: function() {
        app.mainContainer.popView();
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

    // bind to navigate events
    vent.on('navigate:user:index', navigate('/users', controller.users), controller);
    vent.on('navigate:user:details', navigate(function(user) {
      return '/users/' + user.get('id');
    }, controller.user), controller);
    vent.on('navigate:admin:index', navigate('/admins', controller.admins), controller);
    vent.on('navigate:customer:index', navigate('/customers', controller.customers), controller);
    vent.on('navigate:user:closeDetails', navigate('/users', controller.closeDetails), controller);

    return controller;
  }
);
