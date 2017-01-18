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
  var counter = 1000;

  $('.country__arrow_next').click(function(){
    counter++;
    var slides = $(this).siblings('ul').children().length;
    $(this).siblings('ul').css('left', coordinate(counter, slides));
  });

  $('.country__arrow_prev').click(function(){
    counter--;
    var slides = $(this).siblings('ul').children().length;
    var slider = $(this).siblings('ul').css('left', coordinate(counter, slides));
  });

  function coordinate(a, m) {
    if (a >= 0 && a <= 3) {
      var y = a * -300 + 'px';
    } else {
      var y = (a % m) * -300 + 'px';
    }
    return y;
  }

  /* VIDEO */

  $('a.play').click( function(e) {
    e.preventDefault();

    $('body').append('<div class="video-wrap"><div class="video"><iframe rel="0" src="' + $(this).attr('href') +'" frameborder="0" allowfullscreen></iframe><img src="image/svg/icon_close.svg" alt="Close" class="video-close"></div></div>');
  })

  $("body").on("click", ".video-wrap", function () {
    $(this).remove();
  });

  $("body").on("click", ".video-close", function () {
    $(this).parents('.video-wrap').remove();
  });

  /* FILTER */

  $('.mainNav__link').click(function(e){
    e.preventDefault();
    $('.mainNav__link:first').removeClass('mainNav__link_active');
    $(this).addClass('mainNav__link_active');
  })

  $('.mainNav__link:first').click(function(e){
    e.preventDefault();
    $('.mainNav__link').removeClass('mainNav__link_active');
    $(this).addClass('mainNav__link_active');
  })

});
