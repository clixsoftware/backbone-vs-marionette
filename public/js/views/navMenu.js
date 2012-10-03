/*
 * View for the menu
 */

define(['jquery', 'underscore', 'backbone', 'dispatcher', 'bootstrap'], function($, _, Backbone, dispatcher) {
  var NavMenu = Backbone.View.extend({
    initialize: function() {
      console.log(this.$el);
    },
    events: {
      'click .nav-menu-link': 'navigateTo',
      'click .nav-menu-logo': 'navigateTo'
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
