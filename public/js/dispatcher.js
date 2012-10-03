/*
 * Think global event/notification center.
 * Singleton.
 */

(function() {

  define(['underscore', 'backbone'], function(_, Backbone) {
    var dispatcher = {};
    return _.extend(dispatcher, Backbone.Events);
  });

}());