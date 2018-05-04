import Pair from 'crocks/Pair'
import Pred from 'crocks/Pred'

import applyTo from 'crocks/combinators/applyTo'
import curry from 'crocks/helpers/curry'
import defaultTo from 'crocks/helpers/defaultTo'
import fst from 'crocks/Pair/fst'
import isFunction from 'crocks/predicates/isFunction'
import isObject from 'crocks/predicates/isObject'
import isSameType from 'crocks/predicates/isSameType'
import map from 'crocks/pointfree/map'
import merge from 'crocks/Pair/merge'
import propEq from 'crocks/predicates/propEq'
import safe from 'crocks/Maybe/safe'
import safeAfter from 'crocks/Maybe/safeAfter'
import snd from 'crocks/Pair/snd'

export {
  Pred, Pair, curry, defaultTo, fst,
  isSameType, map, merge, propEq, snd
}

// safeDispatch :: (Func, a, b) -> ()
export const safeDispatch = (dispatch, actionFn, value) => {
  safe(isFunction, actionFn)
    .chain(safeAfter(isObject, applyTo(value)))
    .map(dispatch)
}
