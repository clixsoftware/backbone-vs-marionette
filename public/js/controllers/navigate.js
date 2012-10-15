define(['backbone'], 
  function(Backbone) {

    /*
     * Curries the call through to the controller action, passing arguments through
     * Navigates to the given url first.
     */
    return function(url, action) {
      return function() {
        Backbone.history.navigate(url);
        action.apply(arguments);
      };
    };
  }
);