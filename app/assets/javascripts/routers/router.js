Showcase.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    // for GA
    // this.bind('route', this._pageView);
    this.$rootEl = options.$rootEl;
    Showcase.adminMode = false;

    Showcase.projects = new Showcase.Collections.Projects();

    console.log("got here");
    // var map = {83: false, 80: false, 82: false, 69: false, 68: false, 70: false, 65: false, 84: false};
    // $(document).keydown(function(e) {
    //     if (e.keyCode in map) {
    //         map[e.keyCode] = true;
    //         if (map[83] && map[80] && map[32] && map[69] && map[68] && map[70] && map[65] && map[84]) {
    //           alert("it works");
    //         }
    //         console.log(e.keyCode);
    //         console.log(map);
    //     }
    // }).keyup(function(e) {
    //     if (e.keyCode in map) {
    //         map[e.keyCode] = false;
    //     }
    // });

    // corresponds to text: spredfastadmin
    var adminCombo = [83, 80, 82, 69, 68, 70, 65, 83, 84, 65, 68, 77, 73, 78];
    var currIdx = 0;
    var nextKey; 
    $(document).keydown(function(e) {
      nextKey = adminCombo[currIdx];
        if (e.keyCode == nextKey) {
          currIdx++;
          if(currIdx == adminCombo.length) {
            alert("admin mode activated");
            Showcase.adminMode = true;
          }
        } else {
          currIdx = 0;
        }
    });


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