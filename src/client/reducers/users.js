
import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
  'add user' (state, action) {
    return [
        action.payload,
        ...state
    ]
  },

  'update user list' (state, action) {
    return action.payload
  }
}, initialState)
