//модалка
$('.feedback-submit').click(function (){
  $('.modal-close').trigger('click');
  $('.feedback-form input').each(function (){
    $(this).val('')
  })
})

//mobile menu
$('.toggle-mobile-menu').click(function (){
  $(this).toggleClass('active');
  $('.header-main-menu').toggleClass('active');
  $('body').toggleClass('scroll-locked');
})

//slider
var slider = new Swiper(".main-slider", {
  allowTouchMove: false,
  effect: 'fade',
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

//слайдер фото продукта
var swiper = new Swiper(".gallery-nav", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

//переход по блокам в мобилке
$('.header-nav-link').click(function (event){
  event.preventDefault();
  //мобилка үшін
  if($(window).width() < 768) {
    $('.header-main-menu').removeClass('active');
    $('.toggle-mobile-menu').removeClass('active');
    $('body').removeClass('scroll-locked')
  }

  let target = $(this.getAttribute('data-href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 700);
  }
  // Қай бет екенін тексеру керек, егер гланый бет болса жоғарыдағы код, басқа бет болса басқа код
});