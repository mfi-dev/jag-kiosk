/* global Swiper */
function initSwiper () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    setWrapperSize: true
  })
  mySwiper.pagination = true
  mySwiper.scrollbarHide = true
}
initSwiper()
window.addEventListener('hashchange', initSwiper, false)
