import { combineReducers } from 'redux'
import students from './students'
import professors from './professors'
import points from './points'
export default combineReducers({
  students,
  professors,
  points
})