//ramda imports
import lensPath from 'ramda/src/lensPath'
import lensProp from 'ramda/src/lensProp'
import not from 'ramda/src/not'
import over from 'ramda/src/over'

// crocks imports
import Pair from 'crocks/Pair'
import Pred from 'crocks/Pred'

import applyTo from 'crocks/combinators/applyTo'
import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import curry from 'crocks/helpers/curry'
import defaultTo from 'crocks/helpers/defaultTo'
import fst from 'crocks/Pair/fst'
import isBoolean from 'crocks/predicates/isBoolean'
import isFunction from 'crocks/predicates/isFunction'
import isObject from 'crocks/predicates/isObject'
import isSameType from 'crocks/predicates/isSameType'
import map from 'crocks/pointfree/map'
import merge from 'crocks/Pair/merge'
import option from 'crocks/pointfree/option'
import propEq from 'crocks/predicates/propEq'
import propPath from 'crocks/Maybe/propPath'
import safe from 'crocks/Maybe/safe'
import safeAfter from 'crocks/Maybe/safeAfter'
import snd from 'crocks/Pair/snd'

// crocks export
export {
  lensPath, lensProp, not, over,
  Pred, Pair, chain, compose,
  curry, defaultTo, fst,
  isBoolean, isSameType,
  map, merge, option, propEq,
  propPath, safe, snd
}

// safeDispatch :: (Func, a, b) -> ()
export const safeDispatch = (dispatch, actionFn, value) => {
  safe(isFunction, actionFn)
    .chain(safeAfter(isObject, applyTo(value)))
    .map(dispatch)
}
