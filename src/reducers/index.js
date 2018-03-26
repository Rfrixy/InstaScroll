import { combineReducers } from 'redux'
import isLoading from './isLoading'
import instaData from './instaData'
import infiniteView from './infiniteView'

export default combineReducers({
  isLoading,
  instaData,
  infiniteView,
})
