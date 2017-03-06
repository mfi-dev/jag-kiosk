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

var date = new Date()
var time = date.getTime()
var timeout = 420000 // 7 minutes
var checkTime = 30000 // 30 seconds

$(document).bind('touchstart click', function (e) {
  time = new Date().getTime()
})

// Preventing pinch-to-zoom
document.addEventListener('mousewheel', e => {
  if (e.ctrlKey) e.preventDefault()
})

$('.ScreenSaver').bind('touchstart click', function (e) {
  e.stopPropagation()
  e.preventDefault()
  $('.ScreenSaver').removeClass('active')
})

setInterval(function () {
  if (new Date().getTime() - time >= timeout) {
    var loc = window.location.href
    var index = loc.indexOf('/#/') + 1
    if (index < loc.length - 3) {
      window.location = loc.substring(0, index)
    } else {
      $('.ScreenSaver').addClass('active')
    }
  }
}, checkTime)

// function startScreenSaver () {
//
// // we set the 'fx' class on the first image when the page loads
//   document.getElementById('ScreenSaver').getElementsByTagName('img')[0].className = 'fx'
//
// // this calls the kenBurns function every 4 seconds
// // you can increase or decrease this value to get different effects
//   window.setInterval(kenBurns, 6000)
//
// // the third variable is to keep track of where we are in the loop
// // if it is set to 1 (instead of 0) it is because the first image is styled when the page loads
//   const images = document.getElementById('ScreenSaver').getElementsByTagName('img')
//   const numberOfImages = images.length
//   let i = 1
//
//   function kenBurns () {
//     if (i === numberOfImages) { i = 0 }
//     images[i].className = 'fx'
//     // we can't remove the class from the previous element or we'd get a bouncing effect so we clean up the one before last
//     // (there must be a smarter way to do this though)
//     if (i === 0) { images[numberOfImages - 2].className = '' }
//     if (i === 1) { images[numberOfImages - 1].className = '' }
//     if (i > 1) { images[i - 2].className = '' }
//     i++
//   }
// }
