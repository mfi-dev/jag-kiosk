import React from 'react'
import './SideBar.styl'

class SideBar extends React.Component {
  render () {
    return (
      <div className='SideBar'>
        <div className='SideBar__AirForce_Logo' />
        <div className='SideBar__Seal'>
          <img width={220} height={220} src='../../assets/images/jag-seal.png' />
        </div>
      </div>
    )
  }
}

export default SideBar
