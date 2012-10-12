define(
  ['jquery', 'underscore', 'marionette', 'vent', 'bootstrap'],
  function($, _, Marionette, vent) {
    var NavMenu = Marionette.ItemView.extend({
      events: {
        'click .nav-menu-link': 'navigateTo',
        'click .nav-menu-logo': 'navigateTo'
      },
      navigateTo: function(ev) {
        ev.preventDefault();
        var el = $(ev.target);
        vent.trigger(el.data('eventName'));
      },
      initDropdowns: function() {
        this.$el.find('.dropdown-toggle').dropdown();
      }
    });

    return NavMenu;
  }
);
