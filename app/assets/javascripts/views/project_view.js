Showcase.Views.ProjectView = Backbone.View.extend({
  template: JST['project'],
  render: function() {
    var renderedContent = this.template();
    // var projectsView = new Showcase.Views.ProjectsView({collection: this.collection});
    this.$el.html(renderedContent);
    return this;
  }
});