App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  grumbles = new App.Collections.Grumbles();

  grumbles.fetch().then(function(newGrumbles) {
    grumbles.models.forEach(function(grumble) {
      var grumbleView = new App.Views.Grumble({model: grumble});
      $('#grumbles').append(grumbleView.$el);
    });
  });
});
