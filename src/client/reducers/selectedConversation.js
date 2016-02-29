
import { handleActions } from 'redux-actions'

const initialState = 0

export default handleActions({
  'select conversation' (state, action) {
    return action.payload
  }
}, initialState)
