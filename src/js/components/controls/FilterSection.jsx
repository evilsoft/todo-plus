import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FilterLink from '../FilterLink.jsx'

import { curry, map, merge } from '../../helpers'
import { stringPair } from '../../PropTypes'

// buildFilter :: (String, String) -> JSX
const buildFilter = curry(
  (fn, filterState, filter, text) =>
    <FilterLink
      className="filterSection__link"
      applyFilter={fn}
      filterState={filterState}
      filter={filter}
      key={filter}
    >{text}</FilterLink>
)

// buildFilters :: [ (Pair String String) ] -> [ JSX ]
const buildFilters = curry(
  (fn, filterState) =>
    map(merge(buildFilter(fn, filterState)))
)

class FilterSection extends Component {
  render() {
    const {
      applyFilter,
      filterState,
      filters
    } = this.props

    return (
      <div className="filterSection">
        {buildFilters(applyFilter, filterState, filters)}
      </div>
    )
  }
}

FilterSection.defaultProps = {
  applyFilter: Function.prototype,
  filterState: '',
  filters: []
}

FilterSection.propTypes = {
  applyFilter: PropTypes.func,
  filterState: PropTypes.string,
  filters: PropTypes.arrayOf(stringPair)
}

export default FilterSection
