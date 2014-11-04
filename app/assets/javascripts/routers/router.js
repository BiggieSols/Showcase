Showcase.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    // for GA
    // this.bind('route', this._pageView);
    this.$rootEl = options.$rootEl;

    Showcase.projects = new Showcase.Collections.Projects();
    // Showcase.projects.fetch();

    // TeamProfile.currentUser = new TeamProfile.Models.User({id: "current"});
    // TeamProfile.dummyUser   = new TeamProfile.Models.User({id: "dummy"});
    // TeamProfile.groups      = new TeamProfile.Collections.Groups();

    // TeamProfile.currentUser.fetch({
      // success: function() {
        // topNavSearchView = new TeamProfile.Views.TopNavUserSearchView({model: TeamProfile.currentUser});
        // $('#user-search-nav').html(topNavSearchView.render().$el);
      // }
    // });
    // TeamProfile.dummyUser.fetch();
  },

  routes: {
    ""           : "home",
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

  home: function() {
    var srpView, tat;
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
    if(this.currentView) {
      $('body').animate({ scrollTop: 0 }, 0);
      this.$rootEl.
      this.currentView.remove();
    }
    this.currentView = view;
    // add this to display fadeIn and fadeOut on view swap
    // $rootEl.fadeOut(500, function() {
      this.$rootEl.html(this.currentView.render().$el);
      // $rootEl.fadeIn(500)
    // })
  // })

  }
});