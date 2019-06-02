import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from 'fast-redux'
import * as serviceWorker from './serviceWorker'
import { DEFAULT_LOCATION } from './assets/data'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
// import './assets/scss/mdb.scss'
import 'antd/dist/antd.css'
import './index.css'

// import App from './containers/App'
import App from './App'

const preloadedState = {
  locations: {
    marker: DEFAULT_LOCATION
  }
}
const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)
serviceWorker.unregister()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
