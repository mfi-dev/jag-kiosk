import React from 'react'
import SideBar from '../../components/SideBar'
import Swiper from '../../components/Swiper'
import axios from 'axios'

const jsonUrl = 'http://localhost:3030/images/json'
const baseUrl = 'http://localhost:3030/'

class SwiperPage extends React.Component {

  constructor (props) {
    super(props)
    this.getImages = this.getImages.bind(this)
    this.state = {
      images: [],
      loading: true,
      error: null
    }
  }

  componentWillMount () {
    this.getImages()
  }

  getImages () {
    let page = this

    let requestImages = new Promise((resolve, reject) => {
      axios.get(jsonUrl)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    })

    Promise.all([requestImages]).then(imageArrays => {
      page.setState({
        loading: false,
        images: imageArrays[0][this.props.tag]
      })
    })
    .catch((error) => {
      page.setState({
        loading: false,
        error: 'Unable to load images.'
      })
      console.log(error)
    })
  }

  render () {
    return (
      <div className='Page SideBarPage'>
        <SideBar />
        <div className='MainContent'>
          <h1>{this.props.title}</h1>
          <Swiper images={this.state.images} baseImageUrl={`${baseUrl}${this.props.tag}/`} />
        </div>
      </div>
    )
  }
}

SwiperPage.propTypes = {
  tag: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  images: React.PropTypes.array
}

export default SwiperPage
