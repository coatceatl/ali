import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 15,
  /*
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      */
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

