import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toggleTodo } from '../data/reducers/todo'

import Todo from './Todo.jsx'

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
  ({ todos }) => ({ todos })

const mapDispatch = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo({ id }))
})

export default connect(mapState, mapDispatch)(TodoList)
