import React from 'react'
import LinkBox from '../../components/LinkBox'
import { Link } from 'react-router'
import './HomePage.styl'

class HomePage extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Seal'>
          <img src='assets/images/jag-seal.png' />
        </div>
        <nav className='MainMenu'>
          <LinkBox link='/early-years' title='Early Years' />
          <LinkBox link='/modern-era' title='Modern Era' />
          <LinkBox link='/todays-force' title="Today's Force" />
        </nav>
        <Link to='/screensaver'>screensaver</Link>
      </div>
    )
  }
}

export default HomePage
