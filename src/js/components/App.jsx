import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header.jsx'
import Filters from './Filters.jsx'
import TodoList from './TodoList.jsx'

const App = () =>
  <main className="app">
    <Header />
    <Filters />
    <TodoList />
  </main>

App.propTypes = {
  data: PropTypes.shape({
    todos: PropTypes.array.isRequired
  })
}

export default App
