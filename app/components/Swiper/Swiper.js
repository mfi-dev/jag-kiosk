/* global initSwiper, $ */
import React from 'react'
import './Swiper.css'
import './Featherlight.css'
import './Swiper.styl'

class Swiper extends React.Component {
  componentDidUpdate () {
    initSwiper()
  }

  handleImageClick (imageId) {
    $('#' + imageId).featherlight()
  }

  render () {
    let images = []
    switch (this.props.tag) {
      case 'early-years':
        images = this.props.images.early_years
        break
      case 'modern-era':
        images = this.props.images.modern_era
        break
      case 'todays-force':
        images = this.props.images.todays_force
        break
    }
    const swiperSlides = (images)
      ? images.map((image, index) => {
        const style = {
          backgroundImage: `url(http://localhost:3030/${this.props.tag}/${image.imageFile})`
        }
        const id = `slide${index}`
        return (
          <div
            key={image.imageFile + index}
            id={id}
            data-featherlight={`#image${index}`}
            style={style}
            className='swiper-slide'
            onClick={::this.handleImageClick(id)}>
            <div className='Swiper__ImageDescription'>{image.description}</div>
          </div>
        )
      })
      : <div>No images available</div>

    const swiperImages = (images)
      ? images.map((image, index) => {
        const id = `image${index}`
        return (
          <img className='Swiper__LightboxImage' key={id} id={id} src={`http://localhost:3030/${this.props.tag}/${image.imageFile}`} />
        )
      })
      : <div>No Images Available</div>

    return (
      <div className='Swiper'>
        <div className='Swiper__Nav Swiper__Nav--Prev' />
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {swiperSlides}
          </div>
          <div className='swiper-scrollbar' />
        </div>
        <div className='swiper-pagination' />
        <div className='Swiper__Nav Swiper__Nav--Next' />
        <div className='Swiper__Images'>
          {swiperImages}
        </div>
      </div>
    )
  }
}

Swiper.propTypes = {
  images: React.PropTypes.any.isRequired,
  tag: React.PropTypes.string.isRequired
}

export default Swiper
