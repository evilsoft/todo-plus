import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button.jsx'

const Link = ({ active, children, className, onClick }) =>
  <Button
    className={className}
    disabled={active}
    onClick={onClick}
  >{children}</Button>

Link.defaultProps = {
  active: false,
  children: '',
  className: '',
  onClick: Function.prototype,
}

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Link
