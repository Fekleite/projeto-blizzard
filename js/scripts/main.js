var slideThumb = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlidesProgress: true
});

var slideHero = new Swiper(".slide-principal", {
  effect: 'fade',
  thumbs: {
    swiper: slideThumb
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});