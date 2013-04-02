/*!
 * main.js
 *
 * Copyright (c) 2013 Liftoff Computer Services, LLC
 * http://liftoffsupport.com
 *
 */

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
      var body = template({})

      var nav = new NavPartial().render({isHome: true}).$el
      var footer = new FooterPartial().render().$el

      var raw = nav[0].innerHTML + body + footer[0].innerHTML
      $('#container').html(raw)
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
      var body = template({})

      var nav = new NavPartial().render().$el
      var footer = new FooterPartial().render().$el

      var raw = nav[0].innerHTML + body + footer[0].innerHTML
      $('#container').html(raw)
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
      var body = template({})

      var nav = new NavPartial().render().$el
      var footer = new FooterPartial().render().$el

      var raw = nav[0].innerHTML + body + footer[0].innerHTML
      $('#container').html(raw)
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
      'small-business': 'smallBusiness',
      'home-support': 'homeSupport',
      'home-networking': 'homeNetworking',
      'sales': 'sales',
      'home-theater': 'homeTheater',
      '': 'home'
    },
    home: function() {
      var homeView = new HomeView()
      homeView.render()
    },
    locations: function() {
      var locationsView = new LocationsView()
      locationsView.render()
      window.scroll(0, 0)
    },
    pricing: function() {
      var pricingView = new PricingView()
      pricingView.render()
      window.scroll(0, 0)
    },
    smallBusiness: function() {
      scrollHome('small-business')
    },
    homeSupport: function() {
      scrollHome('home-support')
    },
    homeNetworking: function() {
      scrollHome('home-networking')
    },
    sales: function() {
      scrollHome('sales')
    },
    homeTheater: function() {
      scrollHome('home-theater')
    }
  })

  function scrollHome(section) {
    // Render the home page if it's not already
    if (!$('.nav .left').length) {
      var homeView = new HomeView()
      homeView.render()
    }

    // Scroll to the requested section
    var that = $('div .' + section)

    // Chrome and Safari
    $('body').animate({
      scrollTop: ($(that).offset().top - 48)
    }, 800, 'swing')

    // Firefox and IE
    $('html').animate({
      scrollTop: ($(that).offset().top - 34)
    }, 800, 'swing')
  }

  var appRouter = new AppRouter()

  $(function() {
    Backbone.history.start({pushState: false})
  })
})(jQuery, window);
