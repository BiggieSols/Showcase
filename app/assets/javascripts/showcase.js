window.Showcase = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Showcase.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
  },
  dispatcher: _.clone(Backbone.Events)
};

$(document).ready(function(){
  Showcase.initialize();
});
