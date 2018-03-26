import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import isLoading from './isLoading'
import instaData from './instaData'


export default combineReducers({
  todos,
  visibilityFilter,
  isLoading,
  instaData,
})
