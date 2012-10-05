define(['dispatcher',
  'views/mainContainer',
  'views/usersContent'],
  function(dispatcher, mainContainer, UsersContent) {

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

        dispatcher.on('navigate.pop', function(userModel) {
          this.closeUserDetails();
          router.navigate('/users');
        }, this);
      },

      showUsersGrid: function() {
        var usersList = new UsersContent.UsersList();
        usersList.fetch({
          success: function(collection, response) {
            var usersGridView = new UsersContent.UsersGridView({
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
          console.log('userModel was an id');
          return;
        }

        var userDetailsView = new UsersContent.UserDetailsView({ model: userModel });
        mainContainer.pushView(userDetailsView);
      },

      closeUserDetails: function() {

      }
    };

    UserController.prototype = proto;
    return new UserController();
  }
);
