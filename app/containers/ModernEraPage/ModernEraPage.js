import React from 'react'
import SideBar from '../../components/SideBar'
import Swiper from '../../components/Swiper'

import './ModernEraPage.styl'

class ModernEraPage extends React.Component {
  render () {
    return (
      <div className='Page ModernEra SideBarPage'>
        <SideBar />
        <h1>Modern Era</h1>
        <Swiper />
      </div>
    )
  }
}

export default ModernEraPage
