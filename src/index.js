import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap';

import Swiper from 'swiper';

$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 15,
 //   grabCursor: true,

    breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 15
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 15
    }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

