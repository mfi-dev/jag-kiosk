import React from 'react'
// import { connect } from 'react-redux'
import './Swiper.css'
import './Swiper.styl'

class Swiper extends React.Component {
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

    const shownImages = (images)
    ? images.map((image) => {
      return (
        <div key={image.imageFile + image.description}>{image.imageFile}{image.description}</div>
      )
    })
    : <div>N/A</div>

    return (
      <div className='Swiper'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            {shownImages}
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
  images: React.PropTypes.any.isRequired,
  tag: React.PropTypes.string.isRequired
}

// const mapStateToProps = (state) => {
//   return {
//     images: state.images
//   }
// }
//
// export default connect(mapStateToProps)(Swiper)
export default Swiper
