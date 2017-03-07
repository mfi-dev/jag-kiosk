/* global $ */
'use strict'

import React from 'react'
import Clock from '../Clock'
import axios from 'axios'

import './smoothslides.theme.css'
import './ScreenSaver.styl'

const jsonUrl = 'http://localhost:3030/images/json'

class ScreenSaver extends React.Component {

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

  componentDidUpdate () {
    $('#ScreenSaver').smoothSlides({
      matchImageSize: false,
      navigation: false,
      pagination: false
    })
  }

  getImages () {
    let self = this
    let requestImages = new Promise((resolve, reject) => {
      axios.get(jsonUrl)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    })

    Promise.all([requestImages])
      .then(imageArrays => {
        const tags = ['todays_force']
        let imageUrls = []

        for (let i = 0; i < tags.length; i++) {
          let tag = tags[i]
          let imageFiles = imageArrays[0][tag]

          imageFiles.map((image) => {
            imageUrls.push(self.buildImageUrl(tag, image.filename))
          })
        }

        let randomImageUrls = []
        let _tmp = imageUrls.slice()
        for (var i = 0; i < imageUrls.length; i++) {
          var index = Math.ceil(Math.random() * 10) % _tmp.length
          randomImageUrls.push(_tmp.splice(index, 1)[0])
        }

        self.setState({
          loading: false,
          images: randomImageUrls
        })
      })
      .catch((error) => {
        self.setState({
          loading: false,
          error: 'Unable to load images.'
        })
        console.log(error)
      })
  }

  buildImageUrl (tag, filename) {
    return ('http://localhost:3030/' + tag + '/' + filename)
  }

  render () {
    const imageHtml = (this.state.images)
    ? this.state.images.map((imageUrl, index) => {
      const key = `image${index}`
      return (<img key={key} src={imageUrl} />)
    })
    : <h4>Loading Images</h4>
    return (
      <div className='Page ScreenSaverContainer'>
        <Clock />
        <div id='ScreenSaver' className='ScreenSaver smoothslides'>
          {imageHtml}
        </div>
      </div>
    )
  }
}

ScreenSaver.propTypes = {
  images: React.PropTypes.array
}

export default ScreenSaver
