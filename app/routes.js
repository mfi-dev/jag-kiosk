import App from './containers/App'
import HomePage from './containers/HomePage'
import {EarlyYearsPage, ModernEraPage, TodaysForcePage} from './containers/SwiperPages'
import ScreenSaverPage from './containers/ScreenSaverPage'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: HomePage},
    childRoutes: [
      { name: 'early-years', path: '/early-years', component: EarlyYearsPage },
      { name: 'modern-era', path: '/modern-era', component: ModernEraPage },
      { name: 'todays-force', path: '/todays-force', component: TodaysForcePage },
      { name: 'screensaver', path: '/screensaver', component: ScreenSaverPage }
    ]
  }
])
