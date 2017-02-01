import React from 'react'
import LinkBox from '../../components/LinkBox'
import './HomePage.styl'

class HomePage extends React.Component {
  render () {
    return (
      <div className='HomePage'>
        <div className='GoldLine GoldLine--Top' />
        <div className='Seal'>
          <img src='../../assets/images/jag-seal.png' />
        </div>
        <nav className='MainMenu'>
          <LinkBox className='Link' link='#' title='The Judge Advocate Generals' />
          <LinkBox link='#' title='Senior Paralegal Managers' />
          <LinkBox link='#' title='Award Winners' />
          <LinkBox link='#' title='Jag Corps Pulse' />
        </nav>
        <div className='GoldLine GoldLine--Bottom' />
      </div>
    )
  }
}

export default HomePage
