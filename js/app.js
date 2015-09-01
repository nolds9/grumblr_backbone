App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  var grumbles = new App.Collections.Grumbles();

  grumbles.fetch().then(function() {

    grumbles.models.forEach(function(grumble) {
      var grumbleView = new App.Views.Grumble({model: grumble});
      $('#grumbles').append(grumbleView.$el);
    });

  });
});
