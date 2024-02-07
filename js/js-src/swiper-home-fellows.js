const swiperHomeFellows = new Swiper('.swiper-home-fellows', {
  centeredSlides: "auto",
  slidesPerView: "auto",
  slidesPerGroup: 5,
  spaceBetween: 1,
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
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
    1020: {
      slidesPerView: 8,
      spaceBetween: 1,
    }
  }
  // keyboard: {
  //   enabled: true,
  // },
});
