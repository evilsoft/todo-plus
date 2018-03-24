import todo from './todo'

import { combineReducers } from '../helpers'

const reducers = combineReducers([
  todo
])

const reducer = (prevState, action) =>
  reducers(action)
    .execWith(prevState)

export default reducer
