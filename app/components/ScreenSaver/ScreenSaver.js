/* global $, Swiper */
import React from 'react'
import './ScreenSaver.styl'

class ScreenSaver extends React.Component {

  componentDidMount () {
    $('.ScreenSaverPage').bind('touchstart click', this.handleClick)
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

  componentWillUnmount () {
    $('.ScreenSaverPage').unbind('touchstart click', this.handleClick)
  }

  handleClick (e) {
    e.stopPropagation()
    e.preventDefault()
    window.location = '#/'
  }

  render () {
    const swiperSlides = (this.props.images.length)
      ? this.props.images.map((image, index) => {
        const style = {
          backgroundImage: `url(${image})`,
          height: 1080,
          width: 1920
        }
        const id = `slide${index}`
        return (
          <div
            key={image + index}
            id={id}
            style={style}
            className='swiper-slide'
          />
        )
      })
      : <div>Loading images...</div>

    return (
      <div id='ScreenSaver' className='ScreenSaver'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {swiperSlides}
          </div>
          <div className='swiper-scrollbar' />
        </div>
      </div>
    )
  }
}

ScreenSaver.propTypes = {
  images: React.PropTypes.array.isRequired
}

export default ScreenSaver
