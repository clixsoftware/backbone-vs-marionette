define(['jquery', 'underscore'], function($, _) {
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

      if (clearStack){
        this.subViews.length = 0;
        _.each(this.subViews, function(view) {
          view.close();
        });
        this.container.empty();
      }

      view.render();
      this.container.append(view.el);
      this.subViews.push(view);

      var margin = -1 * currentView.$el.width();
      currentView.$el.animate({ 'margin-left': margin + 'px'}, 500);
    };

    /*
     * Pops a view from the list. If there is nothing to pop, returns false.
     * @return: False if nothing was popped from the stack
     */
    this.popView = function(view) {
      if(this.subViews.length === 1) {
        return false;
      }

      var currentView = this.subViews.pop();
      currentView.close();

      var nextView = this.subViews[this.subViews.length-1];

      if(nextView.onReappear)
        nextView.onReappear();

      this.container.html(nextView.el);
    };
  };

  return new MainContainer($('.main-container > .frames'));
});
