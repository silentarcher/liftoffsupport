;(function(window, undefined) {
  var homeView = Backbone.View.extend({

  })

  var locationsView = Backbone.View.extend({

  })

  var pricingView = Backbone.View.extend({
    
  })

  var AppRouter = Backbone.Router.extend({
    routes: {
      "!/locations": "locations",
      "!/pricing": "pricing",
      "": "home"
    },

    home: function() {
      console.log('render home')
    },

    locations: function() {
      console.log('render locations')
    },

    pricing: function() {
      console.log('render pricing')
    }
  })

  var appRouter = new AppRouter()
  console.log('start backbone')
  Backbone.history.start({pushState: false})
})(window);
