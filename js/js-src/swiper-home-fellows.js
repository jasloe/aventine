const swiperHomeFellows = new Swiper('.swiper-home-fellows', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 1,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      normalizeSlideIndex: false,
    },
    1020: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
    }
  }
});
