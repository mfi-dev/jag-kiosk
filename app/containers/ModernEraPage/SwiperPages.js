import React from 'react'
import SwiperPage from '../SwiperPage'

import ModernEraImages from '../../assets/images/ModernEra/ModernEra.json'
import TodaysForceImages from '../../assets/images/TodaysForce/TodaysForce.json'
import EarlyYearsImages from '../../assets/images/EarlyYears/EarlyYears.json'

class ModernEraPage extends React.Component {
  render () {
    return (
      <SwiperPage title='Modern Era' tag='ModernEra' images={ModernEraImages} />
    )
  }
}

class TodaysForcePage extends React.Component {
  render () {
    return (
      <SwiperPage title="Today's Force" tag='TodaysForce' images={TodaysForceImages} />
    )
  }
}

class EarlyYearsPage extends React.Component {
  render () {
    return (
      <SwiperPage title='Early Years' tag='EarlyYears' images={EarlyYearsImages} />
    )
  }
}

export {
  ModernEraPage,
  TodaysForcePage,
  EarlyYearsPage
}
