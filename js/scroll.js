/*! scroll.js */

$(function() {
  // Set handlers on section scrollers
  $('a[href^="#section-"]').click(function() {
    var that = $('a[name="' + $(this).attr('href').substring(1, $(this).attr('href').length) + '"]');

    // Chrome and Safari
    $('body').animate({
      scrollTop: ($(that).offset().top - 48)
    }, 800, 'swing');

    // Firefox and IE
    $('html').animate({
      scrollTop: ($(that).offset().top - 34)
    }, 800, 'swing');

    // Cancel default behavior (navigation to #name) because this was glitchy in the browser
    return false;
  });
});
