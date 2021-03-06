/* global initSwiper, $, mySwiper */
import React from 'react'
import './Featherlight.css'
import './Swiper.css'
import './Swiper.styl'

class Swiper extends React.Component {
  componentDidMount () {
    $('.Swiper__Nav').on('touchstart, click', (e) => {
      this.activateNavButton(e.currentTarget)
    })
  }

  activateNavButton (el) {
    $(el).addClass('active')
    setTimeout(function () {
      $(el).removeClass('active')
    }, 200)
  }

  componentDidUpdate () {
    initSwiper()
    if (this.props.images.length) {
      this.props.images.map((image, index) => {
        $('#slide' + index).featherlight()
      })
    }
  }

  componentWillUnmount () {
    const currentlyOpenFeatherlight = $.featherlight.current()
    if (currentlyOpenFeatherlight !== null) {
      currentlyOpenFeatherlight.close()
    }
    mySwiper.destroy()
  }

  render () {
    const swiperSlides = (this.props.images.length)
      ? this.props.images.map((image, index) => {
        const style = {
          backgroundImage: `url(${this.props.baseImageUrl}${image.filename})`
        }

        const id = `slide${index}`
        const description = (image.description)
          ? <div className='Swiper__ImageDescription'>{image.description}</div>
          : ''

        return (
          <div
            key={image.filename + index}
            id={id}
            data-featherlight={`#image${index}`}
            style={style}
            className='swiper-slide'
          >
            {description}
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

        const description = (image.description)
          ? <div className='LightBox__Description'>{image.description}</div>
          : ''

        return (
          <div className='Lightbox' id={id} key={id}>
            <div className='Lightbox__ImageContainer'>
              <div className='Lightbox__Image' style={style} />
              {description}
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
