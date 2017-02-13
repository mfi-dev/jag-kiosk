import React from 'react'
import SideBar from '../../components/SideBar'
import Swiper from '../../components/Swiper'

import './EarlyYearsPage.styl'

class EarlyYearsPage extends React.Component {
  render () {
    return (
      <div className='Page EarlyYears SideBarPage'>
        <SideBar />
        <div className='MainContent'>
          <h1>Early Years</h1>
          <Swiper />
        </div>
      </div>
    )
  }
}

export default EarlyYearsPage
