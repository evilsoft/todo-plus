import State from 'crocks/State'

import assoc from 'crocks/helpers/assoc'
import compose from 'crocks/helpers/compose'
import map from 'crocks/pointfree/map'

import {
  negate,
  propArray,
  updateRecord
} from '../helpers'

const { get, modify } = State

const mapTodos = mapFn =>
  get(compose(mapFn, propArray('todos')))

const flipComplete = title =>
  map(updateRecord(title, { completed: negate }))

const commit = compose(
  modify, assoc('todos')
)

export const toggle = ({ title }) =>
  mapTodos(flipComplete(title))
    .chain(commit)
