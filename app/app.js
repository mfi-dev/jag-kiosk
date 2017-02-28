import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Promise from 'redux-promise'

import reducers from './reducers'
import routes from './routes'

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
