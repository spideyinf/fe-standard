//=require jquery/dist/jquery.min.js
//=require popper.js/dist/umd/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require owl.carousel/dist/owl.carousel.min.js

$(function() {
  'use strict';

  $('.hot-deals').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  $('.p01-home__banner-slider').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true
  });

  $('.p01-home__feature-shop').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    items: 6
  });
});
