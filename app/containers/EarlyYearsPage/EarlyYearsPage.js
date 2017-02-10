import React from 'react'
import SideBar from '../../components/SideBar'
import Swiper from '../../components/Swiper'

import './EarlyYearsPage.styl'

class EarlyYearsPage extends React.Component {
  render () {
    return (
      <div className='Page EarlyYears SideBarPage'>
        <SideBar />
        <h1>Early Years</h1>
        <Swiper />
      </div>
    )
  }
}

export default EarlyYearsPage
