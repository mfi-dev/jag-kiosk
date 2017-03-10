import React from 'react'
import Clock from '../../components/Clock'
import ScreenSaver from '../../components/ScreenSaver'
import _ from 'lodash'
import IMAGE_JSON from '../../images/images.json'

class ScreenSaverPage extends React.Component {
  constructor (props) {
    super(props)
    let imageFiles = []
    const tagNames = ['early_years', 'modern_era', 'todays_force']

    tagNames.forEach((tag) => {
      const imageFileNames = IMAGE_JSON[tag]
      imageFileNames.forEach((image) => {
        if (image.format !== 'tall') {
          imageFiles.push(this.createImageLink(tag, image.filename))
        }
      })
    })

    this.state = {
      images: _.shuffle(imageFiles)
    }
  }

  createImageLink (tag, filename) {
    const baseUrl = 'http://localhost:3030/'
    return (`${baseUrl}${tag}/${filename}`)
  }

  render () {
    return (
      <div id='ScreenSaver' className='Page ScreenSaverPage'>
        <Clock />
        <ScreenSaver images={this.state.images} />
      </div>
    )
  }
}

export default ScreenSaverPage
