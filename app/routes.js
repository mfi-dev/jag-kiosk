import App from './containers/App'
import HomePage from './containers/HomePage'
import {EarlyYearsPage, ModernEraPage, TodaysForcePage} from './containers/SwiperPages'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: HomePage},
    childRoutes: [
      { path: '/early-years', component: EarlyYearsPage },
      { path: '/modern-era', component: ModernEraPage },
      { path: '/todays-force', component: TodaysForcePage }
    ]
  }
])
