import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

const Button = ({ children, className, disabled, onClick, type }) => {
  const classes = classnames('button', {
    'button--submit': type === 'submit',
    'button--disabled': disabled,
    [className]: !!className
  })

  return <button
    className={classes}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >{children}</button>
}

Button.defaultProps = {
  children: '',
  className: '',
  disabled: false,
  onClick: Function.prototype,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
