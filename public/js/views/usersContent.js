/*
 * All user related stuff
 */

define(['jquery', 'underscore', 'backbone', 'dispatcher'], function($, _, Backbone, dispatcher) {

  var UserModel = Backbone.Model.extend({
    urlRoot: '/api/users'
  });

  var UserRowView = Backbone.View.extend({
    template: _.template($('#user-row-view').html()),
    tagName: 'tr',
    className: 'grid-row',

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
      dispatcher.trigger('navigate.user.openDetails', this.model);
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

  var UsersList = Backbone.Collection.extend({
    url: '/api/users',
    model: UserModel,
    events: {
      'selected': 'userSelected'
    },
    userSelected: function() {
      console.log('added');
    }
  });

  var UsersGridView = Backbone.View.extend({
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

  var UserDetailsView = Backbone.View.extend({
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

      dispatcher.trigger('navigate.user.closeDetails');
    },

    close: function() {
      this.off();
    }
  });

  return {
    UserModel: UserModel,
    UsersList: UsersList,
    UserRowView: UserRowView,
    UsersGridView: UsersGridView,
    UserDetailsView: UserDetailsView
  };
});
