
import { handleActions } from 'redux-actions'

const initialState = {
    recipients: [],
    availableRecipients: [],
    body: ''
}

export default handleActions({
  'new draft' (state, action) {
    return  {
        recipients: [],
        body: ''
    }
  },

  'add recipient' (state, action) {
    return {
        recipients: [...state.recipients, action.payload],
        body: state.body
    }
  },

  'remove recipient' (state, action) {
  },

  'add body' (state, action) {
    return {
        recipients: [...state.recipients],
        body: action.payload
    }
  }
}, initialState)
