import Link from './controls/Link.jsx'

import { connect } from 'react-redux'
import { updateTodoFilter } from '../data/reducers/filterTodos'

const mapProps = (state, own) => ({
  active: state.todoFilter === own.filter
})

const mapDispatch = (dispatch, own) => ({
  onClick: () => { dispatch(updateTodoFilter(own.filter)) }
})

export default connect(
  mapProps,
  mapDispatch
)(Link)
