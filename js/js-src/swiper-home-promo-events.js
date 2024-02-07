const swiperHomePromoEvents = new Swiper('.swiper-home-promo-events', {
  slidesPerView: 2,
  spaceBetween: 3,
  loop: true,
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
      spaceBetween: 3
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 3
    },
    1020: {
      slidesPerView: 5,
      spaceBetween: 3
    }
  }
  // keyboard: {
  //   enabled: true,
  // },
});
