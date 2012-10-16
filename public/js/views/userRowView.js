define(['vent', 'marionette'], function(vent, Marionette) {

  return Marionette.ItemView.extend({
    template: '#user-row-view',
    tagName: 'tr',
    className: 'grid-row',

    initialize: function() {
      this.bindTo(this.model, 'change', this.render, this);
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