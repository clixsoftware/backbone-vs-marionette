define(['underscore', 'vent', 'marionette', 'views/userRowView'], function(_, vent, Marionette, UserRowView) {

  return Marionette.CompositeView.extend({
    template: '#users-grid-view-template',
    className: 'frame container',
    itemViewContainer: 'tbody',
    itemView: UserRowView,

    initialize: function() {
      this.selectedRow = null;
      this.bindTo(this, 'itemview:selected', this.userRowSelected, this);
    },

    onReappear: function() {
      if(this.selectedRow)
        this.selectedRow.deselect();

      this.selectedRow = null;
      this.delegateEvents();
    },

    userRowSelected: function(rowView) {
      if(this.selectedRow)
        this.selectedRow.deselect();

      this.selectedRow = rowView;
      vent.trigger('navigate:user:details', rowView.model);
    }
  });
});

