import React from 'react'

import FilterSection from './controls/FilterSection.jsx'

import { filters, updateTodoFilter } from '../data/reducers/filterTodos'

import { Pair } from '../helpers'

const {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} = filters

// statusFilters :: Pair String String
const statusFilters = [
  Pair(SHOW_ALL, 'All'),
  Pair(SHOW_COMPLETED, 'Completed'),
  Pair(SHOW_ACTIVE, 'Active'),
]

const Filters = () =>
  <div className="filters">
    <FilterSection
      applyFilter={updateTodoFilter}
      filterState="todoFilter"
      filters={statusFilters}
    />
  </div>

export default Filters
