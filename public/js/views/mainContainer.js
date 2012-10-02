define(['jquery'], function($) {
  var MainContainer = function(container){
    this.container = container;

    this.showView = function(view) {
      if (this.currentView){
        this.currentView.close();
      }

      this.currentView = view;
      this.currentView.render();
      this.container.html(this.currentView.el);
    };
  };

  return MainContainer;
});
