import App from './containers/App'
import HomePage from './containers/HomePage'
import {EarlyYearsPage, ModernEraPage, TodaysForcePage} from './containers/SwiperPages'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: HomePage},
    childRoutes: [
      { name: 'early-years', path: '/early-years', component: EarlyYearsPage },
      { name: 'modern-era', path: '/modern-era', component: ModernEraPage },
      { name: 'todays-force', path: '/todays-force', component: TodaysForcePage }
    ]
  }
])
