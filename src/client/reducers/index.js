
import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import conversations from './conversations'

export default combineReducers({
  routing,
  conversations
})
