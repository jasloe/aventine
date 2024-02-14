// Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which do not require different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Such parameters like loop and effect won't work

const swiperHomeLeadership = new Swiper('.swiper-home-leadership', {
  slidesPerView: 1,
  spaceBetween: 3,
  loop: true,
  normalizeSlideIndex: false,

  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  breakpoints: {
    // when window width is >= 640px
    320: {
      spaceBetween: 2,
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 2,
      slidesPerGroup: 2,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 3,
      normalizeSlideIndex: true,
    },
  }
  // keyboard: {
  //   enabled: true,
  // },
});

