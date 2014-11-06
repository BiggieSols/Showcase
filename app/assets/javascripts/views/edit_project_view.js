Showcase.Views.EditProjectView = Backbone.View.extend({
  template: JST["edit"],
  render: function() {
    $(window).off("scroll");
    var renderedContent;
    renderedContent = this.template({project: this.model});
    this.$el.html(renderedContent);
    this.$("select").select2();
    return this;
  }
});