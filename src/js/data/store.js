import { createStore, compose } from 'redux'
import reducer from './reducers'
import { filters } from './reducers/filterTodos'

import identity from 'crocks/combinators/identity'

const { SHOW_ALL } = filters

// data :: AppState
const data = {
  nextId: 4,
  todoFilter: SHOW_ALL,
  todos: [
    { id: 1, title: 'Hug Unicorn', completed: false },
    { id: 2, title: 'Mess With Texas', completed: false },
    { id: 3, title: 'Do Laundry', completed: true }
  ],
  ui: {
    filterGroups: {
      status: false
    }
  }
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  data,
  composeEnhancers(identity)
)
