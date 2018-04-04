import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

function Todo({ todo, onClick }) {
  const { completed, id, title } = todo

  const classes = classnames('todo', {
    'todo--completed': completed
  })

  return <li
    className={classes}
    onClick={() => onClick(id)}
  >{title}</li>
}

Todo.propTypes = {
  onClick: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })
}

export default Todo
