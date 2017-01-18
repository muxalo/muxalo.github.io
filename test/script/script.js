  /*  lazyload*/

$(function() {
  $("img.lazy").lazyload({
     effect : "fadeIn"
   });
});

  /*  FancyBox*/

$(document).ready(function() {
  $(".fancybox").fancybox();
});

    /* SLIDER */

$(function() {

  var next = $('.country__arrow_next');
  var prev = $('.country__arrow_prev');

  next.click( function(e) {
    var parent = $(this).parent();
    var list = $(this).siblings('ul');

    var coordinateY = list.css('left');

    list.css('left', nextSlide(coordinateY));
  });

  prev.click( function() {
    var parent = $(this).parent();
    var list = $(this).siblings('ul');

    var coordinateY = list.css('left');

    list.css('left', prevSlide(coordinateY));
  });

  function nextSlide(y) {
    (y == '-900px') ? y = '0px' : y = parseInt(y) - 300 + 'px';
    return y;
  }

  function prevSlide(y) {
    (y == '0px') ? y = '-900px' : y = parseInt(y) + 300 + 'px';
    return y;
  }

  /* VIDEO */

  $('a.play').click( function(e) {
    e.preventDefault();

    $('body').append('<div class="video-wrap"><div class="video"><iframe src="' + $(this).attr('href') +'" frameborder="0" allowfullscreen></iframe><img src="image/svg/icon_close.svg" alt="Close" class="video-close"></div></div>');
  })

  $("body").on("click", ".video-wrap", function () {
    $(this).remove();
  });

  $("body").on("click", ".video-close", function () {
    $(this).parent().remove();
  });

});