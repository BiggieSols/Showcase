Showcase.Views.ProjectsView = Backbone.View.extend({
  template: JST['project_tiles'],
  initialize: function() {
    this.listenTo(this.collection, "filter-update", this.render);
  },
  render: function() {
    var renderedContent;
    renderedContent = this.template();
    this.$el.html(renderedContent);
    return this._buildProjects()._renderProjects();
  },

  _buildProjects: function() {
    var that;
    that = this;
    this.projectViews = [];
    if ( !this.collection.filteredModels ) this.collection.filteredModels = this.collection.models;
    this.collection.filteredModels = this.collection.filteredModels.slice(0, 25);
    this.collection.filteredModels.forEach(function(project) {
      that.projectViews.push(new Showcase.Views.ProjectTileView({model: project}));
    });
    return this;
  },

  _renderProjects: function() {
    var node;
    node = this.$(".project-tiles");
    this.projectViews.forEach(function(projectView) {
      node.append(projectView.render().$el);
    });
    return this;
  },

  remove: function() {
    this.projectViews.forEach(function(view) {
      view.remove();
    });

    Backbone.View.Prototype.remove.call(this);
  }
});