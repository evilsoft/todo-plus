import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleFilters } from '../data/reducers/ui'

import classnames from 'classnames'

import Button from './controls/Button.jsx'

import {
  chain, compose, curry, isBoolean,
  option, propPath, safe
} from '../helpers'

const FilterButton =
  ({ active, onClick }) => {
    const classes = classnames('filterButton', {
      'filterButton--active': active
    })

    return <Button
      className={classes}
      icon="filter"
      onClick={onClick}
    />
  }

FilterButton.defaultProps = {
  active: false,
  onClick: Function.prototype
}

FilterButton.propTypes = {
  active: PropTypes.bool,
  group: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

// activeGroup :: String -> AppState -> Boolean
const activeGroup = curry(
  group => compose(
    option(false),
    chain(safe(isBoolean)),
    propPath([ 'ui', 'filterGroups', group ])
  )
)

const mapProps = (state, { group }) => ({
  active: activeGroup(group, state)
})

const mapDispatch = (dispatch, { group }) => ({
  onClick: () => dispatch(toggleFilters({ group }))
})

export default connect(mapProps, mapDispatch)(FilterButton)
