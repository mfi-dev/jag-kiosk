/* global $ */
import React from 'react'
import { Link } from 'react-router'
import './LinkBox.styl'

class LinkBox extends React.Component {
  componentDidMount () {
    $('.LinkBox').click(function (e) {
      e.preventDefault()
      const href = $(this).attr('href')
      $(this).addClass('active')
      $(this).delay(350).queue(function () {
        window.location = href
        $(this).dequeue()
      })
    })
  }

  render () {
    return (
      <Link className='LinkBox' to={this.props.link}>
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
          <line className='top top--left' x1='0' y1='0' x2='382' y2='0' />
          <line className='top top--right' x1='737' y1='0' x2='1119' y2='0' />
          <line className='left' x1='0' y1='0' x2='0' y2='155' />
          <line className='right' x1='822' y1='0' x2='822' y2='155' />
          <line className='bottom bottom--left' x1='-300' y1='145' x2='85' y2='145' />
          <line className='bottom bottom--right' x1='440' y1='145' x2='1119' y2='145' />
        </svg>
        <div className='LinkBox__Link'>{this.props.title}</div>
      </Link>
    )
  }
}

LinkBox.propTypes = {
  link: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default LinkBox
