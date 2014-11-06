Showcase.Views.ProjectTileView = Backbone.View.extend({
  template: JST['project_tile'],
  attributes: {
    class: "project-tile",
    draggable: true
  },
  events: {
    "dragstart .project-tile":"test"
  },
  test: function() {
    alsert("dragging started");
  },
  render: function() {
    var renderedContent = this.template({
      tile: this.model,
      adminMode: Showcase.adminMode
    });
    this.$el.html(renderedContent);
    var that = this;
    setTimeout(function() {
      that.$el.css({transform: "scale(1)"});
    }, Math.random() * 500);
    return this;
  }
});