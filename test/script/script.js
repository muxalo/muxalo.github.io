  /*  FancyBox*/

$(document).ready(function() {
  $(".fancybox").fancybox();
});

$(function() {

  /*  logo hover*/

  $('.logo__img').mouseover(function(){
    $('.header').css('background', '#22539d');
  }).mouseout(function(){
    $('.header').attr('style', '');
  });

  /*  lazyload*/

  $("img.lazy").lazyload({
   effect : "fadeIn",
   failure_limit : 1
  });

  /* SLIDER */

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

  var fActive = '';

  function filterId(id) {
    if (fActive != id) {
      $('.country-slider').addClass('country-slider_desibled');
      $('.country_big').removeClass('country-slider_desibled').addClass('country-slider_big_desibled');

      $('.country-slider').filter('.' + id).removeClass('country-slider_desibled');
      $('.country_big').filter('.' + id).removeClass('country-slider_big_desibled');

      if (id == 'all') {
        $('.country-slider').removeClass('country-slider_desibled');
        $('.country_big').removeClass('country-slider_big_desibled');
      }

      fActive = id;
    }

    $("img.lazy").lazyload({
      container : $('.countries'),
      failure_limit : 1
    });
  }

  $('#culture').click( function(e) {
    e.preventDefault();
    $('.mainNav__link').removeClass('mainNav__link_active');
    $(this).addClass('mainNav__link_active');
    filterId('culture');
  });

  $('#extreme').click( function(e) {
    e.preventDefault();
    $('.mainNav__link').removeClass('mainNav__link_active');
    $(this).addClass('mainNav__link_active');
    filterId('extreme');
  });

  $('#atmosphere').click( function(e) {
    e.preventDefault();
    $('.mainNav__link').removeClass('mainNav__link_active');
    $(this).addClass('mainNav__link_active');
    filterId('atmosphere');
  });

  $('#people').click( function(e) {
    e.preventDefault();
    $('.mainNav__link').removeClass('mainNav__link_active');
    $(this).addClass('mainNav__link_active');
    filterId('people');
  });

  $('#all').click( function(e) {
    e.preventDefault();
    $('.mainNav__link').removeClass('mainNav__link_active');
    $(this).addClass('mainNav__link_active');
    $('.country-slider').fadeIn(300);
    if ($(window).width() <= 640) {
      $('.country_big').css('display', 'none');
    }
    filterId('all');
  });

});
