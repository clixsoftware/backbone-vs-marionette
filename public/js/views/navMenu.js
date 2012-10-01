/*
 * View for the menu
 */

define(['jquery', 'underscore', 'backbone', 'dispatcher'], function($, _, Backbone, dispatcher) {
  var NavMenu = Backbone.View.extend({
    events: {
      'click .nav-menu-link': 'navigateTo'
    },
    navigateTo: function(ev) {
      ev.preventDefault();
      var el = $(ev.target);
      dispatcher.trigger('navigate', el.attr('href'));
    },
    initDropdowns: function() {
      this.$el.find('.dropdown-toggle').dropdown();
    }
  });

  return NavMenu;
});
