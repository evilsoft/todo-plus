import { createStore, compose } from 'redux'
import reducer from './reducers'

import identity from 'crocks/combinators/identity'

// data :: AppState
const data = {
  nextId: 4,
  todos: [
    { id: 1, title: 'Hug Unicorn', completed: false },
    { id: 2, title: 'Mess With Texas', completed: false },
    { id: 3, title: 'Do Laundry', completed: true }
  ]
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  data,
  composeEnhancers(identity)
)
