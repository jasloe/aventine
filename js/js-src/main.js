// This should be a preprocess function at *.theme
var el = document.querySelectorAll('.field-page-internal-link > a');

for (i = 0; i < el.length; ++i) {
  el[i].innerHTML = '<span></span>';
}
