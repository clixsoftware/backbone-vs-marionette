define(['views/mainContainer', 'views/usersContent'], function(mainContainer, UsersContent) {
  var UserController = function() {};

  UserController.prototype.showUsersGrid = function() {
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
  };

  return UserController;
});
