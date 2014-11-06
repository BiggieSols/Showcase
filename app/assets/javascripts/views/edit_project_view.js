Showcase.Views.EditProjectView = Backbone.View.extend({
  template: JST["edit"],
  events: {
    "submit #edit-project-form" : "updateProject"
  },
  render: function() {
    $(window).off("scroll");
    var renderedContent;
    renderedContent = this.template({project: this.model});
    this.$el.html(renderedContent);
    this.$("select").select2();
    return this;
  },

  updateProject: function(event) {
    event.preventDefault();
    var form = $(event.currentTarget);
    // alert("form submitted");
    console.log(form);
    window.form = form;
    window.attrs = ["#viz_name", "#visible", "#live", "#subscription", "#region", "#link", "#vertical", "#location", "#industry", "#use_case", "#template_group", "#template"];
    // window.vals = [];
    // attrs.forEach(function(attr) {
    //   vals.push(this.(attr).val());
    // })
    window.output = {};
    attrs.forEach(function(attr) {
      var newAttr = attr.slice(1);
      result = this.$(attr).val();
      if(typeof result === "object") result = result.join(", ");
      output[newAttr] = result;
    });
    this.model.set(output);
    this.model.save({}, {
      success: function() {
        alert("successfully saved!");
        Backbone.history.navigate("", {trigger: true});
      }
    });
  }
});