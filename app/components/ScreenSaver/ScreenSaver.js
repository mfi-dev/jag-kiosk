/* global startScreenSaver */

import React from 'react'
import axios from 'axios'
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
    startScreenSaver()
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
        const tags = ['early_years', 'modern_era', 'todays_force']
        let imageUrls = []

        for (let i = 0; i < tags.length; i++) {
          let tag = tags[i]
          let imageFiles = imageArrays[0][tag]

          imageFiles.map((image) => {
            imageUrls.push(self.buildImageUrl(tag, image.filename))
          })
        }

        self.setState({
          loading: false,
          images: imageUrls
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
    ? this.state.images.map((imageUrl) => {
      <img src={imageUrl} />
    })
    : console.log(this.state.images)

    return (
      <div id='ScreenSaver' className='ScreenSaver'>
        {imageHtml}
      </div>
    )
  }
}

ScreenSaver.propTypes = {
  images: React.PropTypes.array
}

export default ScreenSaver
