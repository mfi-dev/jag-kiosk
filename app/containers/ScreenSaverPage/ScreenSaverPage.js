import React from 'react'
import { Link } from 'react-router'
import Clock from '../../components/Clock'
import ScreenSaver from '../../components/ScreenSaver'
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
      images: imageUrls,
      loading: true,
      error: null,
      intervalId: null
    }
  }

  render () {
    return (
      <div className='Page ScreenSaverPage'>
        <Link className='BackLink' to='/'>Back</Link>
        <Clock />
        <ScreenSaver images={this.state.images} />
      </div>
    )
  }
}

export default ScreenSaverPage
