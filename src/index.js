import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { Provider } from './react-redux'
import { createStore } from 'redux'
// import { createStore } from './redux'

import './index.css'
import App from './components/App'
import reducer from './reducers'
import middleware from './middleware'

// add applyMiddleware to local redux createStore
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)