define(['jquery', 'underscore', 'backbone', 'dispatcher'], function($, _, Backbone, dispatcher) {

  return Backbone.View.extend({
    template: _.template($('#user-details-view-template').html()),

    className: 'frame container',

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    events: {
      'click .user-details-cancel': 'cancel',
      'click .user-details-save': 'save'
    },

    cancel: function(ev) {
      dispatcher.trigger('navigate.user.closeDetails');
    },

    save: function(ev) {
      var self = this;
      var valFor = function(selector) {
        return self.$el.find(selector).val();
      };

      this.model.save({
        'lastName': valFor('#inputLastName'),
        'firstName': valFor('#inputFirstName'),
        'title': valFor('#inputTitle'),
        'titleOfCourtesy': valFor('#inputTitleOfCourtesy'),
        'address': valFor('#inputAddress'),
        'city': valFor('#inputCity'),
        'region': valFor('#inputRegion'),
        'postalCode': valFor('#inputPostalCode'),
        'country': valFor('#inputCountry'),
        'homePhone': valFor('#inputPhone')
      });

      dispatcher.trigger('navigate.user.closeDetails');
    },

    close: function() {
      this.undelegateEvents();
    }
  });
});