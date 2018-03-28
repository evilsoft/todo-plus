import execWith from 'crocks/State/execWith'
import todo from './todo'

import { combineReducers } from '../helpers'

const reducers = combineReducers([
  todo
])

const reducer = (prevState, action) =>
  reducers(action)
    .map(execWith(prevState))
    .option(prevState)

export default reducer
