Showcase.Views.FiltersView = Backbone.View.extend({
  template: JST['filters'],

  events: {
    "click #vertical-select" : "_filterVertical"
  },

  _filterVertical: function() {
    var selectedVerticals;
    selectedVerticals = $("#vertical-select").val();
    selectedVerticals = _.map(selectedVerticals, function(vertical) {return vertical.toLowerCase();});
    // move logic to model
    console.log(selectedVerticals);
    this.collection.filteredModels = this.collection.filter(function(model) {
      if(model && model.get("vertical")) {
        return _.contains(selectedVerticals, model.get("vertical").toLowerCase());
      } 
    });
    console.log(this.collection.filteredModels);
    this.collection.trigger("filter-update");
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});