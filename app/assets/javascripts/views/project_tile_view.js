Showcase.Views.ProjectTileView = Backbone.View.extend({
  template: JST['project_tile'],
  className: "project-tile",
  render: function() {
    var renderedContent = this.template({tile: this.model});
    this.$el.html(renderedContent);
    var that = this;
    setTimeout(function() {
      that.$el.css({transform: "scale(1)"});
    }, 200);
    return this;
  }
});