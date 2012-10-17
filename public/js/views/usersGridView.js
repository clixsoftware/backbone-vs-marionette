define(['jquery',
  'underscore',
  'backbone',
  'dispatcher',
  'views/userRowView'],
  function($, _, Backbone, dispatcher, UserRowView) {

  return Backbone.View.extend({
    template: _.template($('#users-grid-view-template').html()),

    className: 'frame container',

    initialize: function() {
      // keep reference to subviews for cleanup
      this.subViews = [];
      this.selectedRow = null;
    },

    render: function() {
      this.$el.html(this.template());
      this.$body = this.$el.find('tbody');
      this.collection.each(this.addOne, this);
      return this;
    },

    close: function() {
      _.each(this.subViews, function(subView) {
        subView.close();
      });
      this.undelegateEvents();
    },

    onReappear: function() {
      if(this.selectedRow)
        this.selectedRow.deselect();

      this.selectedRow = null;

      _.each(this.subViews, function(subView) {
        subView.onReappear();
      });

      this.delegateEvents();
    },

    addOne: function(user) {
      var rowView = new UserRowView({model: user});
      this.$body.append(rowView.render().el);
      this.subViews.push(rowView);

      rowView.on('selected', this.userRowSelected, this);
    },

    userRowSelected: function(rowView) {
      if(this.selectedRow)
        this.selectedRow.deselect();

      this.selectedRow = rowView;
    }
  });
});
