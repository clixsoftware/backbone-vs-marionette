define(['vent', 'backbone'], function(vent, Backbone) {

  return Backbone.View.extend({
    template: _.template($('#user-row-view').html()),
    tagName: 'tr',
    className: 'grid-row',

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    events: {
      'click': 'selected'
    },

    selected: function() {
      this.$el.addClass('info');
      this.trigger('selected', this);
    },

    deselect: function() {
      this.$el.removeClass('info');
    },

    close: function() {
      this.undelegateEvents();
    },

    onReappear: function() {
      this.delegateEvents();
    }
  });

});