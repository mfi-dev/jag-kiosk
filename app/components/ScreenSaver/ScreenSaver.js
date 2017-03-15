/* global $ */
import React from 'react'
import Clock from '../../components/Clock'
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
    $('.ScreenSaverPage').bind('touchstart, click', this.handleClick)
    $('#ScreenSaver').Kenburns({
      images: this.state.images,
      scale: 0.90,
      duration: 8000,
      fadeSpeed: 1200,
      ease3d: 'ease-out'
    })

    window.setInterval(this.checkTimeout, this.state.timeOutInterval)
    const date = new Date()
    const ScreenSaver = $('#ScreenSaver')
    this.setState({
      lastClickTime: date.getTime()
    })
    $(window).bind('touchstart, click', this.updateLastClickedTime)
    ScreenSaver.bind('touchstart, click', this.hideScreenSaver)
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
    $('#ScreenSaver').addClass('active')
  }

  hideScreenSaver () {
    console.log('hiding')
    $('#ScreenSaver').removeClass('active')
  }

  updateLastClickedTime () {
    const date = new Date()
    console.log('here')
    this.setState({
      lastClickTime: date.getTime()
    })
  }

  render () {
    return (
      <div id='ScreenSaver' className='Page ScreenSaverPage'>
        <Clock />
      </div>
    )
  }
}

export default ScreenSaver
