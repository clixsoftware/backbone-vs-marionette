/*
 * 
 */

define(['jquery', 'views/navMenu'], function($, NavMenu) {
  return {
    root: function() {
      // init the view
      var navMenu = new NavMenu({ el: $('.nav-menu')});
    }
  };
});
