import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from '../actions'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter,
  todos,
  visibilityFilter
})

export default rootReducer