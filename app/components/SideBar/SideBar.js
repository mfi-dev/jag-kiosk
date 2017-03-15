/* global $ */
import React from 'react'
import { Link } from 'react-router'
import './SideBar.styl'

class SideBar extends React.Component {
  componentDidMount () {
    $('.BackButton').on('touchstart, click', function (e) {
      e.preventDefault()
      var href = $(this).attr('href')
      $(this).addClass('active')
      setTimeout(function () {
        window.location = href
      }, 200)
    })
  }

  render () {
    return (
      <div className='SideBar'>
        <div className='SideBar__AirForce_Logo' />
        <div className='SideBar__Seal'>
          <img width={220} height={220} src='assets/images/jag-seal.png' />
        </div>
        <Link className='BackButton' to='/'>
          <div className='BackButton__Container'>
            <div className='BackButton__Text'>Back</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SideBar
