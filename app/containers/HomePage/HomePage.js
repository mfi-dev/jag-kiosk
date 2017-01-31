import React from 'react'
import './HomePage.styl'

class HomePage extends React.Component {
  render () {
    return (
      <div className='HomePage'>
        <div className='GoldLine GoldLine--Top'></div>
        <h1>JAG Kiosk</h1>
        <div className='Seal'>
          <img src='../../assets/images/jag-seal.png' />
        </div>
        <nav className='MainMenu'>
          <div className='MainMenu__LinkContainer'>
            <a className='MainMenu__Link' href='#'>The Judge Advocate Generals</a>
          </div>
          <div className='MainMenu__LinkContainer'>
            <a className='MainMenu__Link' href='#'>Senior Paralegal Managers</a>
          </div>
          <div className='MainMenu__LinkContainer'>
            <a className='MainMenu__Link' href='#'>Award Winners</a>
          </div>
          <div className='MainMenu__LinkContainer'>
            <a className='MainMenu__Link' href='#'>Jag Corps Pulse</a>
          </div>
        </nav>
        <div className='GoldLine GoldLine--Bottom'></div>
      </div>
    )
  }
}

export default HomePage
