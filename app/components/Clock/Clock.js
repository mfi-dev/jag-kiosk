'use strict'

import React from 'react'
import Moment from 'moment'

import './Clock.styl'

class Clock extends React.Component {
  setTime () {
    const now = Moment()
    const date = now.format('dddd, MMMM do YYYY')
    const time = now.format('HH:mm')
    this.setState({
      date: date,
      time: time
    })
  }

  componentWillMount () {
    this.setTime()
  }

  componentDidMount () {
    window.setInterval(function () {
      this.setTime()
    }.bind(this), 1000)
  }

  render () {
    return (
      <div className='DateTime'>
        <div className='Date'>{this.state.date}</div>
        <div className='Time'>{this.state.time}</div>
      </div>
    )
  }
}

export default Clock
