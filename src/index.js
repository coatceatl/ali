import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Swiper from 'swiper';

$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

