App.Views.Grumble = Backbone.View.extend({
  tagName: "div",
  className: "grumble",
  events: {
    'click .delete': 'destroyGrumble',
    'click .edit': 'renderEditForm',
    'click .update': 'updateGrumble',
    'click .cancel': 'render'
  },
  initialize: function(){
    this.listenTo(this.model, "change", this.render)


    console.log("New grumble view created");
    var html = $("#grumbleTemplate").html()
    this.template = Handlebars.compile(html)
    this.render()
  },
  destroyGrumble: function(){
    this.model.destroy();
    this.$el.fadeOut()
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
  },
  renderEditForm: function(){
    event.preventDefault()
    var html = $("#grumbleEditTemplate").html()
    var template = Handlebars.compile(html)
    this.$el.html(template(this.model.attributes))

  },
  updateGrumble: function(){
    event.preventDefault()
    var data = {
      title: this.$el.find("input[name=title]").val(),
      authorName: this.$el.find("input[name=authorName]").val(),
      content: this.$el.find("textArea[name=content]").val(),
      photoUrl: this.$el.find("input[name=photoUrl]").val()
    }
    this.model.save(data)
  }
})
