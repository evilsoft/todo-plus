import React from 'react'

import AddTodo from './AddTodo.jsx'
import FilterButton from './FilterButton.jsx'

const Header = () =>
  <div className="header">
    <AddTodo />
    <FilterButton group="status" />
  </div>

export default Header
