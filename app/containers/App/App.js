import React from 'react'
import FastClick from 'fastclick'
import ScreenSaver from '../../components/ScreenSaver'
import './App.styl'

class App extends React.Component {

  componentDidMount () {
    FastClick.attach(document.body)
  }

  render () {
    const { children } = this.props
    return (
      <div className='AppContainer'>
        <main>
          {children}
        </main>
        <ScreenSaver />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
