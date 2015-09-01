App.Views.GrumblesList = Backbone.View.extend({
  el: "#grumbles",

  initialize: function(){
    console.log("Grumble List View initialized");
    this.listenTo( this.collection, "reset", this.renderAll )
    this.listenTo( this.collection, "add",  this.renderOne )
  },
  renderOne: function(model){
    var newView = new App.Views.Grumble({model: model})
    this.$el.prepend(newView.$el)
  },
  renderAll: function(){
    this.$el.empty()
    this.collection.each( this.renderOne.bind(this) );
  }
    // var models = this.collection.models
    //
    // console.log(models);
    // var views = []
    // for (var i = 0; i < models.length; i++){
    //    var view = new App.Views.Grumble({ model: models[i] })
    //    views.push(view)
    // }

    // console.log(views);
    // this.$el.append(views.$el)


})
