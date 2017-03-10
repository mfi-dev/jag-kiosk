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
    resistance: false
  })
  mySwiper.pagination = true
  mySwiper.scrollbarHide = true
}

$.featherlight.autoBind = false

var date = new Date()
var time = date.getTime()
var timeout = 30000 // 30 seconds
var checkTime = 10000 // 10 seconds

$(document).bind('touchstart click', function (e) {
  time = new Date().getTime()
})

console.log('test')

setInterval(function () {
  if (new Date().getTime() - time >= timeout) {
    var loc = window.location.href
    var index = loc.indexOf('#/') + 1
    window.location = '#/screensaver'
  }
}, checkTime)

// Preventing pinch-to-zoom
document.addEventListener('mousewheel', e => {
  if (e.ctrlKey) e.preventDefault()
})
