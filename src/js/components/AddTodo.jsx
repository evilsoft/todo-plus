import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './controls/Button.jsx'

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
          type="text"
        />
        <Button
          className="addTodo__button"
          icon="plus"
          type="submit"
        />
      </form>
    )
  }
}

export default connect()(AddTodo)
