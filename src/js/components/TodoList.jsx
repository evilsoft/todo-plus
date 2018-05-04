import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleTodo } from '../data/reducers/todo'
import { filters } from '../data/reducers/filterTodos'

import Todo from './Todo.jsx'

import { propEq } from '../helpers'

const {
  SHOW_COMPLETED,
  SHOW_ACTIVE
} = filters

const filterTodos = (active, todos) => {
  switch(active) {
  case SHOW_ACTIVE:
    return todos.filter(propEq('completed', false))
  case SHOW_COMPLETED:
    return todos.filter(propEq('completed', true))
  }

  return todos
}

const TodoList = ({ todos, toggleTodo }) =>
  <ul className="todoList">
    {todos.map((todo, indx) =>
      <Todo
        key={indx}
        todo={todo}
        onClick={toggleTodo}
      />
    )}
  </ul>

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func
}

const mapState =
  ({ todos, todoFilter }) => ({
    todos: filterTodos(todoFilter, todos)
  })

const mapDispatch = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo({ id }))
})

export default connect(mapState, mapDispatch)(TodoList)
