Showcase.Collections.Projects = Backbone.Collection.extend({
  url: "/projects",
  model: Showcase.Models.Project,
  comparator: function(project) {
    return project.get("screenshot") == null;
  }
});