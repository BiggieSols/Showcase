Showcase.Views.FiltersView = Backbone.View.extend({
  template: JST['filters'],

  events: {
    "click select" : "_applyFilters"
  },

  // selector: "#use-case-select"
  // attribute name: "use_case"
  // filterType array contains, string contains, both (maybe just default to both?)
  _filter: function(selector, attribute) {
    var userSelection;
    userSelection = $(selector).val();
    console.log("user selection is " + userSelection)
    userSelection = _.map(userSelection, function( selector ) { return selector.toLowerCase(); });
    this.collection.filteredModels = this.collection.filteredModels.filter(function(model) {
      if( model && model.get(attribute) ) {
        var useCase = model.get(attribute).toLowerCase();
        for(var i = 0; i < userSelection.length; i++) {
          if(useCase.indexOf(userSelection[i].toLowerCase()) > -1) return true;
        }
      }
    });
    console.log(this.collection.filteredModels);
    return this;
  },

  _filterUseCase: function() {
    return this._filter("#use-case-select", "use_case");
  },

  _filterVertical: function() {
    return this._filter("#vertical-select", "vertical");
  },

  _applyFilters: function() {
    this.collection.filteredModels = _.clone(this.collection);
    this._filterVertical()._filterUseCase().collection.trigger("filter-update");
    return this;
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});