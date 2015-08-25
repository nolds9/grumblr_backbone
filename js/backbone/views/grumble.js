GrumbleView = Backbone.View.extend({
  className: 'grumble',
  tagName: 'div',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#grumbleTemplate").html());
    this.editTemplate = Handlebars.compile($("#grumbleFormTemplate").html())
    this.render();
  },

  render: function() {
    var self = this
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.find(".editButton").on("click", function(){
      self.$el.html(self.editTemplate(self.model.toJSON()))
    })
  }
});
