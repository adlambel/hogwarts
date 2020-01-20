import { combineReducers } from 'redux'
import selectedSongs from './selectedSongs'
import selectedBody from './selectedBody'
import students from './students'
export default combineReducers({
  selectedSongs,
  students,
  selectedBody
})