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

const allFilters = document.querySelectorAll(".js-nav-games li a");
const tabPane = document.querySelectorAll(".tab-pane-games");

allFilters.forEach((filter, index) => {
  filter.addEventListener('click', (e) => {
    e.preventDefault();

    allFilters.forEach(item => item.classList.remove('active'))
    tabPane.forEach(item => item.classList.remove('active'))

    tabPane[index].classList.add('active')
    filter.classList.add('active');
  })
})

const btnOpenModal = document.querySelector(".js-open-modal");

btnOpenModal.addEventListener('click', (e) => {
  e.preventDefault();

  document.documentElement.classList.add('modal-active')
})

const btnCloseModal = document.querySelector(".js-close-modal");

btnCloseModal.addEventListener('click', (e) => {
  document.documentElement.classList.remove('modal-active')
})