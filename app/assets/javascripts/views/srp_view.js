Showcase.Views.SRPView = Backbone.View.extend({
  template: JST['srp'],
  render: function() {
    var renderedContent = this.template();
    // var projectsView = new Showcase.Views.ProjectsView({collection: this.collection});
    this.$el.html(renderedContent);
    return this;
  }
});