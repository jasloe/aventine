const swiperHomeLeadership = new Swiper('.swiper-home-leadership', {
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
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 3
    },
  }
  // keyboard: {
  //   enabled: true,
  // },
});
