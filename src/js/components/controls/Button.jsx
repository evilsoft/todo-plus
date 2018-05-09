import React from 'react'
import PropTypes from 'prop-types'

import FA from 'react-fontawesome'

import classnames from 'classnames'

const Button = ({ children, className, disabled, icon, onClick, type }) => {
  const classes = classnames('button', {
    'button--submit': type === 'submit',
    'button--disabled': disabled,
    'button--icon': icon,
    [className]: !!className
  })

  const content = icon
    ? <FA name={icon} size="lg" />
    : children

  return <button
    className={classes}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >{content}</button>
}

Button.defaultProps = {
  children: '',
  className: '',
  disabled: false,
  icon: '',
  onClick: Function.prototype,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
