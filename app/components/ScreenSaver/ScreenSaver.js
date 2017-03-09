/* global $ */
import React from 'react'
import './ScreenSaver.styl'

class ScreenSaver extends React.Component {

  componentDidMount () {
    $('.ScreenSaverPage').bind('touchstart click', this.handleClick)
    $('#ScreenSaver').Kenburns({
      images: this.props.images,
      scale: 0.90,
      duration: 8000,
      fadeSpeed: 1200,
      ease3d: 'ease-out'
    })
    console.log($('#kenburns-slideshow').html)
  }

  componentWillUnmount () {
    $('.ScreenSaverPage').unbind('touchstart click', this.handleClick)
  }

  handleClick (e) {
    e.stopPropagation()
    e.preventDefault()
    window.location = '#/'
  }

  render () {
    return (
      <div id='ScreenSaver' />
    )
  }
}

ScreenSaver.propTypes = {
  images: React.PropTypes.array.isRequired
}

export default ScreenSaver
