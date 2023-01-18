$(document).ready(function () {
  $('.restaurant-about-slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: $('.arrows-block'),
    prevArrow: $('.right-arrow'),
    nextArrow: $('.left-arrow'),
    speed: 300,
    // autoplay: true,
  });
});
$(document).ready(function () {
  $('.ditail-rest-slider').slick({
    arrows: true,
    slidesToShow: 3,
    variableWidth: true,
    appendArrows: $('.arrows-block__ditail-rest'),
    prevArrow: $('.right-arrow__ditail-rest'),
    nextArrow: $('.left-arrow__ditail-rest'),
    speed: 300,
    autoplay: true,
  });
});
