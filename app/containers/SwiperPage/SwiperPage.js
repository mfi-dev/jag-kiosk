import React from 'react'
import SideBar from '../../components/SideBar'
import Swiper from '../../components/Swiper'
import { connect } from 'react-redux'
import { fetchImages } from '../../actions/FETCH_IMAGES'

class SwiperPage extends React.Component {
  componentWillMount () {
    this.props.fetchImages(this.props.tag)
  }

  render () {
    return (
      <div className='Page SideBarPage'>
        <SideBar />
        <div className='MainContent'>
          <h1>{this.props.title}</h1>
          <Swiper images={this.props.images} tag={this.props.tag} />
        </div>
      </div>
    )
  }
}

SwiperPage.propTypes = {
  tag: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  fetchImages: React.PropTypes.func.isRequired,
  images: React.PropTypes.any.isRequired
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps, {fetchImages})(SwiperPage)
