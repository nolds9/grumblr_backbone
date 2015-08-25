GrumbleView = Backbone.View.extend({
  className: 'grumble',
  tagName: 'div',

  events: {
    'click .edit': 'renderEditForm',
    'click .cancel': 'render',
    'click .submit': 'updateGrumble'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);

    this.template = Handlebars.compile($("#grumbleTemplate").html());
    this.editTemplate = Handlebars.compile($("#grumbleFormTemplate").html())

    this.render();
  },

  render: function() {
    event.preventDefault();
    var self = this
    this.$el.html(this.template(this.model.toJSON()));
  },

  renderEditForm: function(){
    this.$el.html(this.editTemplate(this.model.toJSON()))
  },

  updateGrumble: function() {
    event.preventDefault();
  }
});
