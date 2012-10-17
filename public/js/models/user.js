define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  return Backbone.Model.extend({
    initialize: function() {
      this.on('change', this.collection.userChanged, this);
    },
    urlRoot: '/api/users'
  });

});
