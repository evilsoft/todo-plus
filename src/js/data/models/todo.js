import State from 'crocks/State'

import assoc from 'crocks/helpers/assoc'
import compose from 'crocks/helpers/compose'
import concat from 'crocks/pointfree/concat'
import defaultProps from 'crocks/helpers/defaultProps'
import map from 'crocks/pointfree/map'

import {
  negate,
  propArray,
  updateRecord
} from '../helpers'

const { get, modify } = State

// Todo :: { title: String, completed: Boolean }
// Todos :: [ Todo ]

// defaultTodo :: Object -> Todo
const defaultTodo = defaultProps({
  title: '',
  completed: false
})

const flipComplete = title =>
  map(updateRecord(title, { completed: negate }))

// mapTodos :: (Todos -> a) -> State AppState a
const mapTodos = mapFn =>
  get(compose(mapFn, propArray('todos')))

// commit :: Todos -> State AppState ()
const commit = compose(
  modify, assoc('todos')
)

// toggle :: Object -> State AppState ()
export const toggle = ({ title }) =>
  mapTodos(flipComplete(title))
    .chain(commit)

// add :: Object -> State AppState ()
export const add = todo =>
  mapTodos(concat([ defaultTodo(todo) ]))
    .chain(commit)
