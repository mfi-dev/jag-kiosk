import React from 'react'
import './HomePage.styl'

class HomePage extends React.Component {
  render () {
    return (
      <div className='HomePage'>
        <h1>JAG Kiosk</h1>
        <nav className='Menu'>
          <a href='#'>Test</a>
          <a href='#'>Test2</a>
          <a href='#'>Test3</a>
        </nav>
      </div>
    )
  }
}

export default HomePage
