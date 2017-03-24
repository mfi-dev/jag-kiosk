/* global $ */
import React from 'react'
import _ from 'lodash'
import './ScreenSaver.styl'
import IMAGE_JSON from '../../images/images.json'

class ScreenSaver extends React.Component {
  constructor (props) {
    super(props)
    const tagNames = ['early_years', 'modern_era', 'todays_force']
    const date = new Date()
    let imageFiles = []

    tagNames.forEach((tag) => {
      const imageFileNames = IMAGE_JSON[tag]
      imageFileNames.forEach((image) => {
        if (image.format !== 'tall') {
          imageFiles.push(this.createImageLink(tag, image.filename))
        }
      })
    })

    this.updateLastClickedTime = this.updateLastClickedTime.bind(this)
    this.showScreenSaver = this.showScreenSaver.bind(this)
    this.hideScreenSaver = this.hideScreenSaver.bind(this)
    this.checkTimeout = this.checkTimeout.bind(this)

    this.state = {
      images: _.shuffle(imageFiles),
      lastClickTime: date.getTime(),
      timeOut: 60000,
      timeOutInterval: 10000
    }
  }

  createImageLink (tag, filename) {
    const baseUrl = 'http://localhost:3030/'
    return (`${baseUrl}${tag}/${filename}`)
  }

  componentDidMount () {
    const ScreenSaver = document.getElementById('ScreenSaver')
    $(ScreenSaver).Kenburns({
      images: this.state.images,
      scale: 0.90,
      duration: 8000,
      fadeSpeed: 1200,
      ease3d: 'ease-out'
    })
    ScreenSaver.addEventListener('touchstart', this.hideScreenSaver)

    window.addEventListener('touchstart', this.updateLastClickedTime)
    window.setInterval(this.checkTimeout, this.state.timeOutInterval)

    const date = new Date()
    this.setState({
      lastClickTime: date.getTime()
    })
  }

  checkTimeout () {
    const date = new Date()
    const currentTime = date.getTime()
    const timeSinceLastClick = currentTime - this.state.lastClickTime
    if (timeSinceLastClick >= this.state.timeOut) {
      this.showScreenSaver()
    }
  }

  showScreenSaver () {
    const currentlyOpenFeatherlight = $.featherlight.current()
    if (currentlyOpenFeatherlight !== null) {
      currentlyOpenFeatherlight.close()
    }
    document.getElementById('ScreenSaver').classList.add('active')
  }

  hideScreenSaver (evt) {
    evt.preventDefault()
    document.getElementById('ScreenSaver').classList.remove('active')
  }

  updateLastClickedTime () {
    const date = new Date()
    this.setState({
      lastClickTime: date.getTime()
    })
  }

  render () {
    return (
      <div id='ScreenSaver' className='Page ScreenSaverPage' />
    )
  }
}

export default ScreenSaver
