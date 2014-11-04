Showcase.Views.SRPView = Backbone.View.extend({
  template: JST['srp'],

  initialize: function() {
    this.filtersView  = new Showcase.Views.FiltersView({collection: this.collection});
    this.projectsView = new Showcase.Views.ProjectsView({collection: this.collection});
    this.subViews     = [this.filtersView, this.projectsView];
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this._renderFilters()._renderProjects();
  },

  _renderSubView: function(node, view) {
    node.html(view.render().$el);
    return this;
  },

  _renderFilters: function() {
    var node = this.$(".filters");
    return this._renderSubView(node, this.filtersView);
  },

  _renderProjects: function() {
    var node = this.$(".projects");
    return this._renderSubView(node, this.projectsView);
  },

  remove: function() {
    this.subViews.forEach(function(view) {
      view.remove();
    });
    return Backbone.View.prototype.remove.call(this);
  }
});