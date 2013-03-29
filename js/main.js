;(function($, _, window, undefined) {
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
      console.log('home route')
    },

    locations: function() {
      console.log('locations route')
    },

    pricing: function() {
      console.log('pricing route')
    }
  })

  var appRouter = new AppRouter()

  console.log('start backbone')
  Backbone.history.start({pushState: false})
})(jQuery, lodash, window);
