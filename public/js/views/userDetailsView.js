define(['vent', 'marionette'], function(vent, Marionette) {

  return Marionette.ItemView.extend({
    template: '#user-details-view-template',
    className: 'frame container',
    events: {
      'click .user-details-cancel': 'cancel',
      'click .user-details-save': 'save'
    },

    cancel: function(ev) {
      vent.trigger('navigate:user:closeDetails');
    },

    save: function(ev) {
      var self = this;
      var valFor = function(selector) {
        return self.$el.find(selector).val();
      };

      this.model.save({
        "lastName": valFor('#inputLastName'),
        "firstName": valFor('#inputFirstName'),
        "title": valFor('#inputTitle'),
        "titleOfCourtesy": valFor('#inputTitleOfCourtesy'),
        "address": valFor('#inputAddress'),
        "city": valFor('#inputCity'),
        "region": valFor('#inputRegion'),
        "postalCode": valFor('#inputPostalCode'),
        "country": valFor('#inputCountry'),
        "homePhone": valFor('#inputPhone')
      });

      vent.trigger('navigate:user:closeDetails');
    }
  });
  
});
