import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { addTodo } from '../data/reducers/todo'
import { connect } from 'react-redux'

class AddTodo extends Component {
  static get defaultProps() {
    return {
      dispatch: Function.prototype
    }
  }

  static get propTypes() {
    return {
      dispatch: PropTypes.func
    }
  }

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const { dispatch } = this.props

    const { input } = this
    const title = input.value

    if(title.length) {
      dispatch(addTodo({ title }))
      input.value = ''
    }

  }

  render() {
    return (
      <form className="addTodo" onSubmit={this.onSubmit}>
        <input
          className="addTodo__input"
          placeholder="Enter a Title"
          ref={el => { this.input = el }}
        />
        <button
          className="addTodo__button"
          type="submit"
        >Add Todo</button>
      </form>
    )
  }
}

export default connect()(AddTodo)
