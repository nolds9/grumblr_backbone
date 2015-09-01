App = {
  Models: {},
  Views: {
    grumbleViews: []
  },
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  App.Routers.grumble = new App.Routers.Grumble();
  Backbone.history.start();
});
