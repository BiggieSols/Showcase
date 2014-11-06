Showcase.Views.ProjectsView = Backbone.View.extend({
  template: JST['project_tiles'],

  events: {
    "dragstart .project-tile":"handleDragStart",
    "drop .project-tile":"handleDragDrop",
    "dragend .project-tile":"handleDragEnd",

  },

  handleDragStart: function(e) {
    var tile;
    tile = $(e.currentTarget);
    console.log("drag start");
    tile.css("transform", "scale(0)");
    // e.dataTransfer.setData("text", "testing");
    // console.log(e.dataTransfer);
    // console.log(e.dataTransfer)
    // tile.css("display","none");
  },

  handleDragDrop: function(e) {
    var tile;
    tile = $(e.currentTarget);
    console.log("dropping");
    // tile.css("display","none");
  },

  handleDragEnd: function(e) {
    var tile;
    tile = $(e.currentTarget);
    console.log("dragging ended");
    $(e.currentTarget).css("transform", "scale(1)");
    console.log("text on drop is " + e.dataTransfer.getData("text"));
    // window.tile = tile;
    // console.log(e.dataTransfer)
    // tile.css("display","none");
  },

  initialize: function() {
    this.listenTo(this.collection, "filter-update", this.render);
    this.currIndex = 0;
    this.INCREMENT = 25;
  },

  render: function() {
    var renderedContent;
    renderedContent = this.template();
    this.$el.html(renderedContent);
    return this._buildProjects()
               ._renderProjects()
               ._listenForScroll()
               ._updateResultsCount();
  },

  _buildProjects: function() {
    var that;
    that = this;
    this.projectViews = [];
    if ( !this.collection.filteredModels ) this.collection.filteredModels = this.collection.models;
    this.collection.filteredModels.forEach(function(project) {
      if(project.get("visible")) {
        that.projectViews.push(new Showcase.Views.ProjectTileView({model: project}));
      } 
    });
    if(this.collection.filteredModels.length === 0) this._renderNoResults();
    this.currIndex = 0;
    return this;
  },

  _renderNoResults: function() {
    this.$(".num-results").html("Sorry, no results match your filters!");
  },

  _renderProjects: function() {
    var node;
    node = this.$(".project-tiles");
    if ( this.currIndex > this.collection.filteredModels.length ) return this;

    this.projectViews.slice(this.currIndex, this.currIndex + this.INCREMENT).forEach(function(projectView) {
      node.append(projectView.render().$el);
    });
    this.currIndex += this.INCREMENT;
    return this;
  },

  remove: function() {
    this.projectViews.forEach(function(view) {
      view.remove();
    });

    Backbone.View.prototype.remove.call(this);
  },

  _listenForScroll: function () {
    // $(window).off("scroll"); // remove past view's listeners
    var throttledCallback = _.throttle(this._nextPage.bind(this), 100);
    $(window).on("scroll", throttledCallback);
    return this;
  },

  _nextPage: function () {
    var that = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 300) {
      this._renderProjects();
    }
  },

  _updateResultsCount: function() {
    this.$(".num-results").html(this.collection.filteredModels.length);
    return this;
  },
});