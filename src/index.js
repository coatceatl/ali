import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

/* slider */
import Swiper from 'swiper';

$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 22,
    loop: true,
    loopFillGroupWithBlank: true,
 //   grabCursor: true,

    breakpoints: {
    // when window width is <= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is <= 740px
    740: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is <= 1140px
    1140: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    // when window width is <= 1200px
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

  /* toogle buttons товары-услуги*/

   $('.header-bottom__options a').on('click', function(e) {
     e.preventDefault();
     $(this).addClass('button-active').siblings().removeClass('button-active');

     //$('.header-outline').toggleClass('button-active');
  });
});



