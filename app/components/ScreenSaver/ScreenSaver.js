/* global $ */
'use strict'

import React from 'react'
import { Link } from 'react-router'
import Clock from '../Clock'

import './smoothslides.theme.css'
import './ScreenSaver.styl'
import ImageJson from '../../images/images.json'

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
    const screenSaverElement = $('#ScreenSaver')
    screenSaverElement.smoothSlides({
      matchImageSize: false,
      navigation: false,
      pagination: false
    })
    screenSaverElement.on('smoothslidesReordered', (e) => {
      const lastRenderedIndex = parseInt($('.ss-slide:nth-child(2) img', screenSaverElement).attr('data-index'))
      const nextIndex = (lastRenderedIndex === (this.state.images.length - 1))
        ? 0
        : lastRenderedIndex + 1
      $('.ss-slide:first img', screenSaverElement).attr({
        'src': this.state.images[nextIndex],
        'data-index': nextIndex
      })
    })
  }

  getImages () {
    let imageUrls = []
    let tag = 'todays_force'
    let imageFiles = ImageJson[tag]

    imageFiles.forEach((image) => {
      imageUrls.push(this.buildImageUrl(tag, image.filename))
    })

    this.setState({
      loading: false,
      images: imageUrls
    })
  }

  buildImageUrl (tag, filename) {
    return ('http://localhost:3030/' + tag + '/' + filename)
  }

  randomIndexOfArrayWithExclusions (arr, exclusions) {
    let index
    do {
      index = Math.floor(Math.random() * arr.length)
    } while (exclusions.indexOf(index) !== -1)
    return index
  }

  render () {
    const imageHtml = (this.state.images)
    ? this.state.images.slice(0, 4).map((imageUrl, index) => {
      const key = `image${index}`
      return (<img key={key} src={imageUrl} data-index={index} />)
    })
    : <h4>Loading Images</h4>
    return (
      <div className='Page ScreenSaverContainer'>
        <Link className='BackLink' to='/'>Back</Link>
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
