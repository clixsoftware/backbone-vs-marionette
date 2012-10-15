define(['vent', 'marionette', 'views/userRowView'], function(vent, Marionette, UserRowView) {

  return Marionette.CompositeView.extend({
    template: '#users-grid-view-template',

    className: 'frame container',

    initialize: function() {
      this.selectedRow = null;
    },

    itemViewContainer: 'tbody',
    itemView: UserRowView,

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

