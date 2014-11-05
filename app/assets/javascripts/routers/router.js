Showcase.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    // for GA
    // this.bind('route', this._pageView);
    this.$rootEl = options.$rootEl;

    Showcase.projects = new Showcase.Collections.Projects();

  },

  routes: {
    ""                : "home",
    "projects/:id/edit" : "editProject",
    "projects/:id"    : "project",
    // "how"        : "how",
    // "contact"    : "contact",
    // "terms"      : "terms",
    // "privacy"    : "privacy",
    // "support"    : "support",
    // "users/:id"  : "user",
    // "assessment" : "quiz",
    // "groups/:id" : "group",
    // "groups"     : "groups",
  },

  editProject: function(id) {
    var that, project, editProjectView;
    that            = this;
    project         = new Showcase.Models.Project({id: id});
    editProjectView = new Showcase.Views.EditProjectView({model: project});
    window.project  = project;

    project.fetch({
      success: function() {
        that._swapView(editProjectView);
      }
    });
  },

  home: function() {
    var srpView, that;
    srpView = new Showcase.Views.SRPView({collection: Showcase.projects});
    that    = this;
    // TODO: only require fetch on first pageload, then store results.
    Showcase.projects.fetch({
      success: function() {
        that._swapView(srpView);    
      }
    });
    window.srpView = srpView;
    
  },

  _swapView: function(view) {
    var that = this;
    if(this.currentView) {
      console.log("current view identified");
      $('body').animate({ scrollTop: 0 }, 0);
      this.currentView.remove();
    }
    this.currentView = view;
    // add this to display fadeIn and fadeOut on view swap
    this.$rootEl.fadeOut(200, function() {
      that.$rootEl.html(view.render().$el);
      that.$rootEl.fadeIn(200);
    });
  }
});