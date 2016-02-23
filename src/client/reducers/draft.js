
import { handleActions } from 'redux-actions'

const initialState = {
    recipients: [],
    body: ''
}

export default handleActions({
  'add recipient' (state, action) {
    return {
        recipients: [...state, action.payload],
        body: state.body
    }
  }
}, initialState)
