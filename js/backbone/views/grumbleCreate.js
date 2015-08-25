GrumbleCreateView = Backbone.View.extend({
  el: "#createGrumble",

  events: {
    'click .new':    'toggleForm',
    'click .cancel': 'toggleForm',
    'click .submit': 'createGrumble'
  },

  initialize: function(){
    this.template = Handlebars.compile($("#grumbleFormTemplate").html());

    this.$(".formContainer").html(this.template({}));
    this.$(".formContainer").hide();
  },

  toggleForm: function(){
    event.preventDefault();
    this.$(".formContainer").slideToggle();
  },

  createGrumble: function(){
    event.preventDefault();
    var data = {
      title: this.$("[name='title']").val()
    }
    this.model.save(data)
  }

});
