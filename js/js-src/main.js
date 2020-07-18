// This should be a preprocess function at *.theme
var el = document.querySelectorAll('.field-page-internal-link > a');

for (i = 0; i < el.length; ++i) {
  el[i].innerHTML = '<span></span>';
}

(function ($) {
  // add markup to region-header
  var $window = $(window);
  var $hamburger = $(".hamburger");
  var $body = $("body");
  var $overlay = $("#overlay");
  var $hamburger = $(".hamburger");

  function resize() { // resize function
    if ($window.width() < 1024) {
      $body.addClass("mobile");
    } else {
      $body.removeClass("mobile");
      $body.removeClass("is-open");
      $hamburger.removeClass("is-active");
    }
  };

  $hamburger.on("click", function () { // hamburger clicked
    $hamburger.toggleClass("is-active"); // change hamburger state
    // $body.toggleClass("no-scroll"); // disable scrolling
    $body.toggleClass("is-open"); // add class to hide menu
    $overlay.toggleClass("is-open");
  });


  $window
    .resize(resize)
    .trigger('resize');

})(jQuery);
