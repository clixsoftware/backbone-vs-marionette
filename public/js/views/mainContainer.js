define(['jquery'], function($) {
  var MainContainer = function(container){
    this.container = container;
    this.subViews = [];

    /*
     * Pushes a new view on to the view stack. Makes the given view visible.
     * @param {object} view: View to push onto the stack
     * @param {boolean} clearStack: (optional) True to indicates whether to start a new stack or
     *    push the view onto the stack.
     */
    this.pushView = function(view, clearStack) {
      var currentView = this.subViews[this.subViews.length-1];
      if (currentView){
        currentView.close();
      }

      view.render();
      this.container.html(view.el);

      if(clearStack) {
        this.subViews.length = 0;
      }

      this.subViews.push(view);
    };
  };

  return MainContainer;
});
