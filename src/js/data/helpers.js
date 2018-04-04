import First from 'crocks/First'
import Pred from 'crocks/Pred'
import State from 'crocks/State'

import applyTo from 'crocks/combinators/applyTo'
import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import equals from 'crocks/pointfree/equals'
import flip from 'crocks/combinators/flip'
import isArray from 'crocks/predicates/isArray'
import isFunction from 'crocks/predicates/isFunction'
import isSameType from 'crocks/predicates/isSameType'
import or from 'crocks/logic/or'
import mconcatMap from 'crocks/helpers/mconcatMap'
import merge from 'crocks/Pair/merge'
import mreduceMap from 'crocks/helpers/mreduceMap'
import option from 'crocks/pointfree/option'
import prop from 'crocks/Maybe/prop'
import safe from 'crocks/Maybe/safe'
import toPairs from 'crocks/Pair/toPairs'
import when from 'crocks/logic/when'
import unless from 'crocks/logic/unless'

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

// predOrEq :: a -> (b -> Boolean)
export const predOrEq = unless(
  or(isFunction, isSameType(Pred)),
  equals
)

// propArray :: String -> Object -> Array
export const propArray = key => compose(
  option([]),
  chain(safe(isArray)),
  prop(key)
)

// propSatisfies :: (String, Pred) -> Object -> Boolean
export const propSatisfies = (key, pred) => compose(
  option(false),
  chain(safe(predOrEq(pred))),
  prop(key)
)

// updateRecord :: (Object, (Object -> Object)) -> Object -> Object
export const updateRecord = (qry, update) =>
  when(where(qry), update)

// where :: Object -> Object -> Boolean
export const where = compose(
  mconcatMap(Pred, merge(propSatisfies)),
  toPairs
)
