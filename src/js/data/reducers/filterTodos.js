import { createAction, createReducer } from '../helpers'
import { setFilter } from '../models/filterTodos'

const SET_TODO_FILTER = 'SET_TODO_FILTER'

const SHOW_ALL = 'SHOW_ALL'
const SHOW_COMPLETED = 'SHOW_COMPLETED'
const SHOW_ACTIVE = 'SHOW_ACTIVE'

export const filters = {
  SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE
}

export const updateTodoFilter =
  createAction(SET_TODO_FILTER)

const reducer = createReducer({
  [SET_TODO_FILTER]: setFilter,
})

export default reducer
