Showcase.Views.EditProjectView = Backbone.View.extend({
  template: JST["edit"],
  render: function() {
    var renderedContent;
    renderedContent = this.template({project: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});