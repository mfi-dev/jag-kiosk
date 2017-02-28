import React from 'react'
import { connect } from 'react-redux'
import './Swiper.css'
import './Swiper.styl'

class Swiper extends React.Component {
  componentWillMount () {
    console.log(this.props.images)
    this.props.images.map(image => {
      console.log(image)
    })
  }

  render () {
    // console.log('from swiper:', this.props.images.images)
    return (
      <div className='Swiper'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            HERE
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
  images: React.PropTypes.any.isRequired
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(Swiper)
