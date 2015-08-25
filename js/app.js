App = {
  Models: {},
  Views: {
    grumbleViews: []
  },
  Collections: {},
  Routers: {}
}

$(document).ready(function() {
  grumblesRouter = new App.Routers.Grumbles();
  Backbone.history.start();
});
