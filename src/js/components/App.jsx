import React from 'react'
import PropTypes from 'prop-types'

import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'

const App = () =>
  <main className="app">
    <AddTodo />
    <TodoList />
  </main>

App.propTypes = {
  data: PropTypes.shape({
    todos: PropTypes.array.isRequired
  })
}

export default App
