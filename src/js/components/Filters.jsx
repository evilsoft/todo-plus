import React from 'react'

import FilterLink from './FilterLink.jsx'

import { filters } from '../data/reducers/filterTodos'

const {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} = filters

const Filters = () =>
  <div className="filters">
    <FilterLink filter={SHOW_ALL} className="filters__link">All</FilterLink>
    <FilterLink filter={SHOW_COMPLETED} className="filters__link">Completed</FilterLink>
    <FilterLink filter={SHOW_ACTIVE} className="filters__link">Active</FilterLink>
  </div>

export default Filters
