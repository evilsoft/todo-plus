// this should stay here.
import 'babel-polyfill'
import '../less/main.less'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App.jsx'
import reducer from './data/reducers'

const data = {
  todos: [
    { title: 'Hug Unicorn', completed: false },
    { title: 'Mess With Texas', completed: false },
    { title: 'Do Laundry', completed: true }
  ]
}

const store = createStore(reducer, data)

const appEl = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>
  , appEl)
