
import { handleActions } from 'redux-actions'

const initialState = false

export default handleActions({
  'new conversation' (state, action) {
    return action.payload
  }
}, initialState)
