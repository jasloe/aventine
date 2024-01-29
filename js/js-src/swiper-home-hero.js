console.log('Swiper loaded');

const swiperHomeHero = new Swiper('.swiper-home-hero', {
  slidesPerView: 1,
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// const swiperEvents = new Swiper('.swiper-events', {
//   slidesPerView: 2,
//   // spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + "</span>";
//     },
//   },
//   keyboard: {
//     enabled: true,
//   },
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 2
//     },
//     // when window width is >= 640px
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 2
//     },
//     1020: {
//       slidesPerView: 6,
//       spaceBetween: 2
//     }
//   }
// });

// const swiperPeople = new Swiper('.swiper-people', {
//   slidesPerView: "auto",
//   centeredSlides: "auto",
//   spaceBetween: 1,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + "</span>";
//     },
//   },
//   // keyboard: {
//   //   enabled: true,
//   // },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 1,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 1,
//     },
//     1020: {
//       slidesPerView: 8,
//       spaceBetween: 1,
//     }
//   }
// });
