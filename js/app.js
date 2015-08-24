$(document).ready(function() {
  grumbles = new GrumblesCollection();
  grumbles.fetch({reset: true});
  listView = new GrumbleListView({collection: grumbles});
});
