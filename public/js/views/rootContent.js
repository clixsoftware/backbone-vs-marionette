/*
 * View for the root content
 */

define(['jquery', 'underscore', 'marionette'], function($, _, Marionette) {
  var RootContent = Marionette.ItemView.extend({
    template: '#root-template',
    className: 'frame container'
  });

  return RootContent;
});
