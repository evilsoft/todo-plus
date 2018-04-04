// this should stay here.
import 'babel-polyfill'
import '../less/main.less'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App.jsx'
import store from './data/store'

const appEl = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>
  , appEl
)
