// app.js

App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  var grumbles = new App.Collections.Grumbles();
  var grumblesList = new App.Views.GrumblesList({ collection: grumbles });
  grumbles.fetch({ reset: true })
  var createView = new App.Views.GrumbleCreate({ collection: grumbles })
});
