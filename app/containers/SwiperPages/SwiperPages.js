import React from 'react'
import SwiperPage from '../SwiperPage'

class ModernEraPage extends React.Component {
  render () {
    return (
      <SwiperPage title='Modern Era' tag='modern_era' />
    )
  }
}

class TodaysForcePage extends React.Component {
  render () {
    return (
      <SwiperPage title="Today's Force" tag='todays_force' />
    )
  }
}

class EarlyYearsPage extends React.Component {
  render () {
    return (
      <SwiperPage title='Early Years' tag='early_years' />
    )
  }
}

export {
  ModernEraPage,
  TodaysForcePage,
  EarlyYearsPage
}
