define(['jquery', 'underscore', 'backbone', 'models/user'], function($, _, Backbone, User) {

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
