import React from 'react'
import Clock from '../../components/Clock'
import ScreenSaver from '../../components/ScreenSaver'
import _ from 'lodash'
import IMAGE_JSON from '../../images/images.json'

class ScreenSaverPage extends React.Component {
  constructor (props) {
    super(props)
    let imageFiles = IMAGE_JSON['todays_force']
    let imageUrls = []
    imageFiles.forEach((image) => {
      if (image.format !== 'tall') {
        const imageUrl = `http://localhost:3030/todays_force/${image.filename}`
        imageUrls.push(imageUrl)
      }
    })
    this.state = {
      images: imageUrls
    }
  }

  render () {
    return (
      <div id='ScreenSaver' className='Page ScreenSaverPage disabled'>
        <Clock />
        <ScreenSaver images={this.state.images} />
      </div>
    )
  }
}

export default ScreenSaverPage
