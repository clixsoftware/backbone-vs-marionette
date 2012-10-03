/*
 * Shows a table with all users
 */

define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  var UserModel = Backbone.Model.extend({
    urlRoot: '/api/users'
  });

  var UserRowView = Backbone.View.extend({
    template: $('#').html(),

    render: function() {
      this.$el.html(this.template);
      return this;
    },
    close: function() {
    }
  });

  var UsersList = Backbone.Collection.extend({
    url: '/api/users',
    model: UserModel
  });

  var UsersGridView = Backbone.View.extend({
    template: _.template($('#users-grid-view').html()),

    render: function() {
      this.$el.html(this.template());
      return this;
    },
    close: function() {
      // noop
    }
  });

  return {
    UserModel: UserModel,
    UsersList: UsersList,
    UserRowView: UserRowView,
    UsersGridView: UsersGridView
  };
});
