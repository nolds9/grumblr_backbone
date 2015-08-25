App.Models.Grumble = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/grumbles',
  defaults: { posts: [] },

  initialize: function () {
   this.comments = new App.Collections.Comments();
   this.comments.url = this.url() + '/comments';
 }
});
