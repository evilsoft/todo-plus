import { toggle } from '../models/todo'

const TOGGLE_TODO = 'TOGGLE_TODO'

export const toggleTodo = payload =>
  ({ type: TOGGLE_TODO, payload })

function todo({ type, payload }) {
  switch(type) {
  case TOGGLE_TODO:
    return toggle(payload)
  }
}

export default todo
