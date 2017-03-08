/* global initScreenSaver */
import React from 'react'
import './smoothslides.theme.css'
import './ScreenSaver.styl'

class ScreenSaver extends React.Component {
  componentDidUpdate () {
    initScreenSaver()
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
