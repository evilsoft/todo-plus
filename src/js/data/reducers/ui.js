import { createAction, createReducer } from '../helpers'
import { toggleFilterGroup } from '../models/ui'

const TOGGLE_FILTERS =
  'TOGGLE_FILTERS'

export const toggleFilters =
  createAction(TOGGLE_FILTERS)

const reducer = createReducer({
  [TOGGLE_FILTERS]: toggleFilterGroup
})

export default reducer
