import './App.styl'
import React from 'react'
import FastClick from 'fastclick'

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
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
