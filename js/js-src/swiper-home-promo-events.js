const swiperHomePromoEvents = new Swiper('.swiper-home-promo-events', {
  // slidesPerView: 2,
  // spaceBetween: 3,
  loop: true,
  spaceBetween: 3,
  // normalizeSlideIndex: false,
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
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 3,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      // spaceBetween: 3,
      // loopFillGroupWithBlank: false,
    },
    1020: {
      slidesPerView: 6,
      spaceBetween: 3,
    }
  }
  // keyboard: {
  //   enabled: true,
  // },
});
