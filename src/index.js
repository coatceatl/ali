import $ from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

/* slider */
import Swiper from 'swiper';

$(document).ready(function() {
  var mySwiper = new Swiper('#headerSwiper', {
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

  /* product-slider */

  var productSwiper = new Swiper('#productSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev',
    },
  });


  /* toogle buttons товары-услуги*/

   $('.header-bottom__options a').on('click', function(e) {
     e.preventDefault();
     $(this).addClass('button-active').siblings().removeClass('button-active');

     //$('.header-outline').toggleClass('button-active');
  });

  /* vision/hidden signup*/

  $('#visionSignup').on('click', function(e) {
    e.preventDefault();
    $('#signup').addClass('d-flex flex-column');
  });

  $('.modal-hidden').on('click', function(e) {
    e.preventDefault();
    $('#signup').removeClass('d-flex flex-column');
  });

  /* amount products */
  $('#minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('#plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  /* yandex map */

  ymaps.ready(init);

  function init(){
    var myMap = new ymaps.Map('map', {
      center: [59.939095, 30.315868],
      zoom: 11
    });
  }
});




