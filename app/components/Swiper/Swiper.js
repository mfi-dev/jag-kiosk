/* global initSwiper, $ */
import React from 'react'
import FastClick from 'fastclick'
import './Featherlight.css'
import './Swiper.css'
import './Swiper.styl'

class Swiper extends React.Component {
  componentDidMount () {
    FastClick.attach(document.body)
  }

  componentDidUpdate () {
    initSwiper()
    if (this.props.images.length) {
      this.props.images.map((image, index) => {
        $('#slide' + index).featherlight()
      })
    }
  }

  render () {
    const swiperSlides = (this.props.images.length)
      ? this.props.images.map((image, index) => {
        const style = {
          backgroundImage: `url(${this.props.baseImageUrl}${image.filename})`
        }
        const id = `slide${index}`
        return (
          <div
            key={image.filename + index}
            id={id}
            data-featherlight={`#image${index}`}
            style={style}
            className='swiper-slide'
          >
            <div className='Swiper__ImageDescription'>{image.description}</div>

          </div>
        )
      })
      : <div>Loading images...</div>

    const swiperImages = (this.props.images.length)
      ? this.props.images.map((image, index) => {
        const id = `image${index}`

        let style = {
          'backgroundImage': `url(${this.props.baseImageUrl}${image.filename})`,
          'height': 850,
          'width': 1200,
          'backgroundSize': 'cover',
          'backgroundPosition': 'center center'
        }

        if (image.format === 'tall') {
          style.height = 800
          style.width = 500
        }

        return (
          <div className='Lightbox' id={id} key={id}>
            <div className='Lightbox__ImageContainer'>
              <div className='Lightbox__Image' style={style} />
              <div className='LightBox__Description'>{image.description}</div>
            </div>
          </div>
        )
      })
      : ''

    return (
      <div className='Swiper'>
        <div className='Swiper__Nav Swiper__Nav--Prev' />
        <div className='Swiper__Images'>
          {swiperImages}
        </div>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {swiperSlides}
          </div>
          <div className='swiper-scrollbar' />
        </div>
        <div className='swiper-pagination' />
        <div className='Swiper__Nav Swiper__Nav--Next' />
      </div>
    )
  }
}

Swiper.propTypes = {
  images: React.PropTypes.any.isRequired,
  baseImageUrl: React.PropTypes.string.isRequired
}

export default Swiper
