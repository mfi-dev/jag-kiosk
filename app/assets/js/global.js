/* global Swiper, $ */
function initSwiper () {
  var mySwiper = new Swiper('.swiper-container', {
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
    resistance: false
  })
  mySwiper.pagination = true
  mySwiper.scrollbarHide = true
}

$.featherlight.autoBind = false

function initScreenSaver () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    scrollbarHide: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    resistance: false,
    height: 1080,
    width: 1920,
    autoplay: 9000,
    setWrapperSize: true,
    effect: 'coverflow'
  })
  mySwiper.pagination = false
  mySwiper.scrollbarHide = true
}

// Preventing pinch-to-zoom
document.addEventListener('mousewheel', e => {
  if (e.ctrlKey) e.preventDefault()
})
