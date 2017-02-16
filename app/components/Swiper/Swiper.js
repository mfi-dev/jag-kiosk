import React from 'react'
import './Swiper.css'
import './Swiper.styl'

class Swiper extends React.Component {
  render () {
    const imageHtml = this.props.images.map(image => {
      return (
        <div key={image} className='Swiper__Slide swiper-slide'>
          <div className='Swiper__Slide__Content'>
            <img className='Swiper__Image' src={this.props.imageDir + '/' + image} />
          </div>
        </div>
      )
    })
    return (
      <div className='Swiper'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {imageHtml}
          </div>
          <div className='swiper-pagination' />
          <div className='swiper-button-prev' />
          <div className='swiper-button-next' />
          <div className='swiper-scrollbar' />
        </div>
      </div>
    )
  }
}

Swiper.propTypes = {
  imageDir: React.PropTypes.string.isRequired,
  images: React.PropTypes.array.isRequired
}

export default Swiper
