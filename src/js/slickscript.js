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
