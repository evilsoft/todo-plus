import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

function Todo({ todo, onClick }) {
  const { title, completed } = todo

  const classes = classnames('todo', {
    'todo--completed': completed
  })

  return <li
    className={classes}
    onClick={() => onClick(title)}
  >{title}</li>
}

Todo.propTypes = {
  onClick: PropTypes.func,
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
  })
}

export default Todo
