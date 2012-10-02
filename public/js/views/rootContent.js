/*
 * View for the root content
 */

define(['jquery', 'underscore', 'backbone', 'dispatcher', 'bootstrap'], function($, _, Backbone, dispatcher) {
  var RootContent = Backbone.View.extend({
    template: _.template($('#root-template').html()),
    render: function() {
      this.$el.html(this.template({man: 'dude'}));
      return this;
    }
  });

  return RootContent;
});
