/**
 * Bootstrap App here
 */
import React from 'react'
import ReactDOM from 'react-dom'
// React Redux
import { Provider } from 'react-redux'
// Normalize
import 'normalize.css'
// Redux store
import store from './redux/store'
// Service Workworkers
import registerServiceWorker from './registerServiceWorker'
// App component
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
