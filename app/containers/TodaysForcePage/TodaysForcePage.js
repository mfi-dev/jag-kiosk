import React from 'react'
import SideBar from '../../components/SideBar'
import Swiper from '../../components/Swiper'

import './TodaysForcePage.styl'

class TodaysForcePage extends React.Component {
  render () {
    return (
      <div className='Page TodaysForce SideBarPage'>
        <SideBar />
        <div className='MainContent'>
          <h1>Today's Force</h1>
          <Swiper />
        </div>
      </div>
    )
  }
}

export default TodaysForcePage
