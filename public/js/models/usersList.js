define(['vent', 'backbone', 'models/user'], function(vent, Backbone, User) {

  return Backbone.Collection.extend({
    url: '/api/users',
    model: User
  });
  
});