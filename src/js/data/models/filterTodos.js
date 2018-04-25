import State from 'crocks/State'

import assoc from 'crocks/helpers/assoc'

const { modify } = State

export const setFilter = filter =>
  modify(assoc('todoFilter', filter))
