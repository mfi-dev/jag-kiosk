import React from 'react'
import './Swiper.css'

class Swiper extends React.Component {
  render () {
    return (
      <div className='swiper-container' height={400} width={800}>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>Slide 1</div>
          <div className='swiper-slide'>Slide 2</div>
          <div className='swiper-slide'>Slide 3</div>
        </div>
        <div className='swiper-pagination' />
        <div className='swiper-button-prev' />
        <div className='swiper-button-next' />
        <div className='swiper-scrollbar' />
      </div>
    )
  }
}

export default Swiper
