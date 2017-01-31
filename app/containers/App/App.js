import './App.styl'
import React from 'react'

class App extends React.Component {
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
