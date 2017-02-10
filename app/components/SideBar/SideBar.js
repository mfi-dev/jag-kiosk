import React from 'react'
import { Link } from 'react-router'
import './SideBar.styl'

class SideBar extends React.Component {
  render () {
    return (
      <div className='SideBar'>
        <div className='SideBar__AirForce_Logo' />
        <div className='SideBar__Seal'>
          <img width={220} height={220} src='../../assets/images/jag-seal.png' />
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
