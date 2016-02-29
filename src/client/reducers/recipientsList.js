
import { handleActions } from 'redux-actions'

const initialState = false

export default handleActions({
  'toggle recipients list' (state, action) {
    return !state
  }
}, initialState)
