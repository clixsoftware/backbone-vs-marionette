define(['jquery', 'underscore', 'backbone', 'dispatcher', 'bootstrap'], function($, _, Backbone, dispatcher) {
  var RootContent = Backbone.View.extend({
    template: $('#root-template').html(),
    render: function() {
      this.$el.html(this.template);
      return this;
    },
    close: function() {
      
    }
  });

  return RootContent;
});
