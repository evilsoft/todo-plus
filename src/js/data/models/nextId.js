import State from 'crocks/State'

import assoc from 'crocks/helpers/assoc'
import constant from 'crocks/combinators/constant'
import propOr from 'crocks/helpers/propOr'

const { get, modify } = State

// incNextId :: Number -> State AppState Number
const incNextId = id =>
  modify(assoc('nextId', id + 1))
    .map(constant(id))

// genId :: () -> State AppState Number
export const genId = () =>
  get(propOr(0, 'nextId'))
    .chain(incNextId)
