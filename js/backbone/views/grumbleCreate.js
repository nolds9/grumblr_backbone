App.Views.GrumbleCreate = Backbone.View.extend({
  el: "#createGrumble",
  events: {
    "click .new": "renderCreateForm",
    "click .create": "createGrumble"
  },
  initialize: function(){
    var html = $("#grumbleCreateTemplate").html()
    this.createTemplate = Handlebars.compile(html)
    this.$el.html(this.createTemplate({}))
    // this.$el.hide()
  },
  renderCreateForm: function(){
    this.$el.show()
  },
  createGrumble: function(){
    event.preventDefault()
    var data = {
      title: this.$el.find("input[name=title]").val(),
      authorName: this.$el.find("input[name=authorName]").val(),
      content: this.$el.find("textArea[name=content]").val(),
      photoUrl: this.$el.find("input[name=photoUrl]").val()
    }
    console.log(data)
    var newItem = new App.Models.Grumble(data)
    this.collection.add(newItem)
    this.$el.empty()
    // newItem.save()
    // var newView = new App.Views.Grumble({model: newItem})
  }

})

// initialize: function(){
//
// }
