
import { handleActions } from 'redux-actions'

const initialState = {
    username: ''
}

export default handleActions({
  'set username' (state, action) {
    return  {
        username: action.payload
    }
  }
}, initialState)
