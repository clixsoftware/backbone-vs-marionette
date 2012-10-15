define(['vent', 'backbone', 'models/user'], function(vent, Backbone, User) {

  return Backbone.Collection.extend({
    url: '/api/users',
    model: User,

    initialize: function() {
    },
    userUpdated: function(ev) {
      console.log(ev);
    },
    userChanged: function() {
      console.log('added');
    }
  });
  
});