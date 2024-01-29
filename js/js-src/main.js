(function ($) {
  var $window = $(window);
  var $hamburger = $(".hamburger");
  var $body = $("body");
  var $overlay = $("#overlay");

  function resize() {
    // resize function
    if ($window.width() < 1024) {
      $body.addClass("mobile");
    } else {
      $body.removeClass("mobile");
      $body.removeClass("is-open");
      $hamburger.removeClass("is-active");
      $overlay.removeClass("is-open");
    }
  }

  $hamburger.on("click", function () {
    // hamburger clicked
    $hamburger.toggleClass("is-active"); // change hamburger state
    $body.toggleClass("no-scroll"); // disable scrolling
    $body.toggleClass("is-open"); // add class to hide menu
    $overlay.toggleClass("is-open");
  });

  $window.resize(resize).trigger("resize");
})(jQuery);

(function ($) {
  var $searchBtn = $(".search");
  var $searchContainer = $(".search-container");
  var $body = $("body");
  var $closeSearchContainer = $(".search-menu");
  $searchBtn.on("click", function () {
    $searchBtn.toggleClass("is-active");
    $body.toggleClass("no-scroll");
    $body.toggleClass("is-open");
    $searchContainer.toggleClass("is-open");
  });
  $closeSearchContainer.on('click', function () {
    $body.toggleClass("no-scroll");
    $body.toggleClass("is-open");
    $searchContainer.toggleClass("is-open");
  })
})(jQuery);
