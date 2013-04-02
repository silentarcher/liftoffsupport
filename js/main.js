// (c) 2013 Liftoff Computer Services, LLC
// http://liftoffsupport.com

;(function($, window, undefined) {

  //---------------------------------------------------------------------------
  // Pages
  //---------------------------------------------------------------------------

  var HomeView = Backbone.View.extend({
    template: '#home',

    initialize: function() {
      _.bindAll(this, 'render')
    },
    render: function() {
      var source = $(this.template).html()
      var template = Handlebars.compile(source)
      var html = template({})

      var nav = new NavPartial().render({isHome: true}).$el
      var footer = new FooterPartial().render().$el

      $('#container').html('')
      $('#container').append(nav)
      $('#container').append(html)
      $('#container').append(footer)
    }
  })

  var LocationsView = Backbone.View.extend({
    template: '#locations',

    initialize: function() {
      _.bindAll(this, 'render')
    },
    render: function() {
      var source = $(this.template).html()
      var template = Handlebars.compile(source)
      var html = template({})

      var nav = new NavPartial().render().$el
      var footer = new FooterPartial().render().$el

      $('#container').html('')
      $('#container').append(nav)
      $('#container').append(html)
      $('#container').append(footer)
    }
  })

  var PricingView = Backbone.View.extend({
    template: '#pricing',

    initialize: function() {
      _.bindAll(this, 'render')
    },
    render: function() {
      var source = $(this.template).html()
      var template = Handlebars.compile(source)
      var html = template({})

      var nav = new NavPartial().render().$el
      var footer = new FooterPartial().render().$el

      $('#container').html('')
      $('#container').append(nav)
      $('#container').append(html)
      $('#container').append(footer)
    }
  })

  //---------------------------------------------------------------------------
  // Partials
  //---------------------------------------------------------------------------

  var NavPartial = Backbone.View.extend({
    template: '#nav',

    initialize: function() {
      _.bindAll(this, 'render')
    },
    render: function(context) {
      context = context || {}
      var source = $(this.template).html()
      var template = Handlebars.compile(source)
      var html = template(context)
      this.$el.html(html)
      return this
    }
  })

  var FooterPartial = Backbone.View.extend({
    template: '#footer',

    initialize: function() {
      _.bindAll(this, 'render')
    },
    render: function() {
      var source = $(this.template).html()
      var template = Handlebars.compile(source)
      var html = template({})
      this.$el.html(html)
      return this
    }
  })

  //---------------------------------------------------------------------------
  // Router
  //---------------------------------------------------------------------------

  var AppRouter = Backbone.Router.extend({
    routes: {
      '!/locations': 'locations',
      '!/pricing': 'pricing',
      'section-1': 'home',
      'section-2': 'home',
      'section-3': 'home',
      'section-4': 'home',
      'section-5': 'home',
      '': 'home'
    },
    home: function() {
      console.log('home route')
      var homeView = new HomeView()
      homeView.render()
    },
    locations: function() {
      console.log('locations route')
      var locationsView = new LocationsView()
      locationsView.render()
    },
    pricing: function() {
      console.log('pricing route')
      var pricingView = new PricingView()
      pricingView.render()
    }
  })

  var appRouter = new AppRouter()

  $(function() {
    console.log('start backbone history')
    Backbone.history.start({pushState: false})
  })
})(jQuery, window);
