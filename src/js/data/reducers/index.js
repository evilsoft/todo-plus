import execWith from 'crocks/State/execWith'
import todo from './todo'
import filterTodos from './filterTodos'

import { combineReducers } from '../helpers'

// Action a :: { type: String, payload: a }
// Reducer :: Action a -> Maybe (State AppState ())

// reducers :: Reducer
const reducers = combineReducers([
  todo,
  filterTodos
])

// reducer :: (AppState, Action) -> AppState
const reducer = (prevState, action) =>
  reducers(action)
    .map(execWith(prevState))
    .option(prevState)

export default reducer
