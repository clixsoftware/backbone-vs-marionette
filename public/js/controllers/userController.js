define(['dispatcher',
  'views/mainContainer',
  'views/usersGridView',
  'models/usersList',
  'views/userDetailsView'],
  function(dispatcher, mainContainer, UsersGridView, UsersList, UserDetailsView) {

    var UserController = function() {};

    var proto = {
      initEvents: function(router) {
        dispatcher.on('navigate.user.index', function() {
          this.showUsersGrid();
          router.navigate('/users');
        }, this);

        dispatcher.on('navigate.user.openDetails', function(userModel) {
          this.showUserDetails(userModel);
          router.navigate('/users/' + userModel.id);
        }, this);

        dispatcher.on('navigate.user.closeDetails', function(userModel) {
          this.closeUserDetails();
          router.navigate('/users');
        }, this);
      },

      showUsersGrid: function() {
        var usersList = new UsersList();
        usersList.fetch({
          success: function(collection, response) {
            var usersGridView = new UsersGridView({
              collection: collection
            });
            mainContainer.pushView(usersGridView, true);
          },
          error: function(collection, xhr) {
            // ignore error
          }
        });
      },

      showUserDetails: function(userModel) {
        if(!isNaN(userModel)) {
          // load details as if it were from a route trigger
          console.log('userModel was an id');
          return;
        }

        var userDetailsView = new UserDetailsView({ model: userModel });
        mainContainer.pushView(userDetailsView);
      },

      closeUserDetails: function() {
        mainContainer.popView();
      }
    };

    UserController.prototype = proto;
    return new UserController();
  }
);
