import { combineReducers } from 'redux'
import selectedSongs from './selectedSongs'
import selectedBody from './selectedBody'
export default combineReducers({
  selectedSongs,
  selectedBody
})