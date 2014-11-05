Showcase.Models.Project = Backbone.Model.extend({
  toJSON: function() {
    return { project: _.clone( this.attributes ) };
  },

});