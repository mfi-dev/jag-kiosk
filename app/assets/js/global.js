/* global Swiper */
function initSwiper () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    scrollbar: '.swiper-scrollbar',
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20
  })
  mySwiper.pagination = true
}
initSwiper()
window.addEventListener('hashchange', initSwiper, false)
