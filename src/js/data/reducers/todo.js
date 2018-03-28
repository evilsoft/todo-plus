import { add, toggle } from '../models/todo'
import { createAction, createReducer } from '../helpers'

const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_TODO = 'ADD_TODO'

export const toggleTodo =
  createAction(TOGGLE_TODO)

export const addTodo =
  createAction(ADD_TODO)

const reducer = createReducer({
  [TOGGLE_TODO]: toggle,
  [ADD_TODO]: add
})

export default reducer
