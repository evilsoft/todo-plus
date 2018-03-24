import State from 'crocks/State'
import First from 'crocks/First'

import applyTo from 'crocks/combinators/applyTo'
import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import equals from 'crocks/pointfree/equals'
import isArray from 'crocks/predicates/isArray'
import isSameType from 'crocks/predicates/isSameType'
import mapProps from 'crocks/helpers/mapProps'
import mconcatMap from 'crocks/helpers/mconcatMap'
import option from 'crocks/pointfree/option'
import prop from 'crocks/Maybe/prop'
import propOr from 'crocks/helpers/propOr'
import safe from 'crocks/Maybe/safe'
import when from 'crocks/logic/when'

const runReducer = action => compose(
  safe(isSameType(State)),
  applyTo(action)
)

export const combineReducers = reducers => action =>
  mconcatMap(First, runReducer(action), reducers)
    .option(State.of(action))

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
