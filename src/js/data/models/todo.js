import State from 'crocks/State'

import assoc from 'crocks/helpers/assoc'
import compose from 'crocks/helpers/compose'
import composeK from 'crocks/helpers/composeK'
import concat from 'crocks/pointfree/concat'
import defaultProps from 'crocks/helpers/defaultProps'
import liftA2 from 'crocks/helpers/liftA2'
import map from 'crocks/pointfree/map'
import mapProps from 'crocks/helpers/mapProps'

import { genId } from './nextId'

import {
  negate,
  propArray,
  updateRecord
} from '../helpers'

const { get, modify } = State

// Todo :: { id: Number, title: String, completed: Boolean }
// Todos :: [ Todo ]

// defaultTodo :: Object -> Todo
const defaultTodo = defaultProps({
  title: '',
  completed: false
})

// applyDefaults :: Object -> State AppState Object
const applyDefaults = rec =>
  State.of(rec)
    .map(defaultTodo)

// create :: Object -> State AppState Todo
const create = rec => liftA2(
  assoc('id'),
  genId(),
  applyDefaults(rec)
)

// flipComplete :: Number -> Todo -> Todo
const flipComplete = id => updateRecord(
  { id },
  mapProps({ completed: negate })
)

// mapTodos :: (Todos -> a) -> State AppState a
const mapTodos = mapFn =>
  get(compose(mapFn, propArray('todos')))

// addTodo :: Todo -> State AppState Todos
const addTodo = todo =>
  mapTodos(concat([ todo ]))

// commit :: Todos -> State AppState ()
const commit = todos =>
  modify(assoc('todos', todos))

// toggle :: Object -> State AppState ()
export const toggle = ({ id }) =>
  mapTodos(map(flipComplete(id)))
    .chain(commit)

// add :: Object -> State AppState ()
export const add =
  composeK(commit, addTodo, create)
