define(['tests/assert', 'models/user', 'backbone'], function(assert, User, Backbone) {

  describe('User model', function() {
    it('should export a User model', function() {
      assert(User, 'User was not exported');
    });

    it('should have a url', function() {
      var user = new User();
      assert(user.url());
    });
  });

});