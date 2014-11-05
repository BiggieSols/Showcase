Showcase.Views.FiltersView = Backbone.View.extend({
  template: JST['filters'],

  events: {
    "change select" : "_applyFilters"
  },

  // selector: "#use-case-select"
  // attribute name: "use_case"
  // filterType array contains, string contains, both (maybe just default to both?)
  _filter: function(selector, attribute) {
    var userSelection;
    userSelection = $(selector).val();

    console.log("user selection is " + userSelection);

    if(userSelection === null) return this;
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

  _listenForScroll: function() {
    var filterTop;

    var throttledCallback = _.throttle(function() {
      var diff, $node;
      $node     = $(".filters");
      filterTop = filterTop || $node.offset().top;
      diff      = filterTop - $(window).scrollTop();

      if(diff < 0 && !$node.hasClass("fixed-top")) {
        $node.addClass("fixed-top");
        $(".project-tiles").css("margin-top", $node.height());
      } else if (diff > 0 && $node.hasClass("fixed-top")) {
        $(".project-tiles").css("margin-top", 0);
        $node.removeClass("fixed-top");
      }
    }, 200);
    $(window).off("scroll", throttledCallback);
    $(window).on("scroll", throttledCallback);
  },

  _filterUseCase: function() {
    return this._filter("#use-case-select", "use_case");
  },

  _filterVertical: function() {
    return this._filter("#vertical-select", "vertical");
  },

  _filterTemplateGroup: function() {
    return this._filter("#template-group-select", "template_group");
  },

  _filterProjectName: function() {
    return this._filter("#project-name-select", "viz_name");
  },

  _applyFilters: function() {
    this.collection.filteredModels = _.clone(this.collection);
    this._filterVertical()
        ._filterUseCase()
        ._filterProjectName()
        ._filterTemplateGroup()
        .collection.trigger("filter-update");
    $(window).scrollTop(0);
    return this;
  },

  render: function() {
    var defaultOpts, renderedContent;
    renderedContent = this.template({
      projects: this.collection.models
    });

    this.$el.html(renderedContent);

    defaultOpts = {
      allowClear: true
    };

    this.$("#vertical-select").select2(defaultOpts);
    this.$("#use-case-select").select2(defaultOpts);
    this.$("#template-group-select").select2(defaultOpts);

    this.$("#project-name-select").select2(_.extend(defaultOpts, {
      minimumInputLength: 3
    }));
    this._listenForScroll();
    return this;
  }
});