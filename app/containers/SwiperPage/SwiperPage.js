import React from 'react'
import SideBar from '../../components/SideBar'
import Swiper from '../../components/Swiper'

class SwiperPage extends React.Component {
  render () {
    return (
      <div className='Page SideBarPage'>
        <SideBar />
        <div className='MainContent'>
          <h1>{this.props.title}</h1>
          <Swiper imageDir={'../../assets/images/' + this.props.tag} images={this.props.images} />
        </div>
      </div>
    )
  }
}

SwiperPage.propTypes = {
  tag: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  images: React.PropTypes.array.isRequired
}

export default SwiperPage
