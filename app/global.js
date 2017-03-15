/* global Swiper, $ */
var mySwiper
function initSwiper () {
  mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    pagination: '.swiper-pagination',
    nextButton: '.Swiper__Nav--Next',
    prevButton: '.Swiper__Nav--Prev',
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    setWrapperSize: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    resistance: false,
    onSlideChangeEnd: function (swiper) {
      swiper.update()
    }
  })
  mySwiper.pagination = true
  mySwiper.scrollbarHide = true
}

$.featherlight.autoBind = false
