import State from 'crocks/State'
import First from 'crocks/First'

import applyTo from 'crocks/combinators/applyTo'
import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import equals from 'crocks/pointfree/equals'
import flip from 'crocks/combinators/flip'
import isArray from 'crocks/predicates/isArray'
import isSameType from 'crocks/predicates/isSameType'
import mapProps from 'crocks/helpers/mapProps'
import mreduceMap from 'crocks/helpers/mreduceMap'
import option from 'crocks/pointfree/option'
import prop from 'crocks/Maybe/prop'
import propOr from 'crocks/helpers/propOr'
import safe from 'crocks/Maybe/safe'
import when from 'crocks/logic/when'

// Action a :: { type: String, payload: a }
// Reducer :: Action a -> Maybe (State AppState ())

// combineReducers :: [ Reducer ] -> Reducer
export const combineReducers = flip(action =>
  mreduceMap(First, applyTo(action))
)

// createAction :: String -> a -> Action a
export const createAction =
  type => payload => ({ type, payload })

// createReducer :: Object -> Reducer
export const createReducer =
  strats => ({ type, payload }) =>
    prop(type, strats)
      .map(applyTo(payload))
      .chain(safe(isSameType(State)))

// negate :: a -> Boolean
export const negate =
  x => !x

// propArray :: String -> Object -> Array
export const propArray = key => compose(
  option([]),
  chain(safe(isArray)),
  prop(key)
)

// sameTitle :: String -> Object -> Boolean
const sameTitle = title => compose(
  equals(title), propOr('', 'title')
)

// updateRecord :: (String, Object) -> Object -> Object
export const updateRecord = (title, update) =>
  when(sameTitle(title), mapProps(update))
