import React from 'react'
import SwiperPage from '../SwiperPage'

class ModernEraPage extends React.Component {
  render () {
    return (
      <SwiperPage title='Modern Era' tag='modern-era' />
    )
  }
}

class TodaysForcePage extends React.Component {
  render () {
    return (
      <SwiperPage title="Today's Force" tag='todays-force' />
    )
  }
}

class EarlyYearsPage extends React.Component {
  render () {
    return (
      <SwiperPage title='Early Years' tag='early-years' />
    )
  }
}

export {
  ModernEraPage,
  TodaysForcePage,
  EarlyYearsPage
}
