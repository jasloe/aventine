const swiperHomePromoEvents = new Swiper('.swiper-home-promo-events', {
  slidesPerView: 6,
  centeredSlides: "auto",
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
  keyboard: {
    enabled: true,
  },
});
