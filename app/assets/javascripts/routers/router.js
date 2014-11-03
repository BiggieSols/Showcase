Showcase.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    // for GA
    // this.bind('route', this._pageView);
    // this.$rootEl = options.$rootEl;

    Showcase.projects = new Showcase.Collections.Projects();
    Showcase.projects.fetch();

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
    // ""           : "home",
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
});