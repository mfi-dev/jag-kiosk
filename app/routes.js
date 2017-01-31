import App from './containers/App'
import HomePage from './containers/HomePage'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: HomePage},
    childRoutes: []
  }
])
