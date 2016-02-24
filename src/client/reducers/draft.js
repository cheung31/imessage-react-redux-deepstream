
import { handleActions } from 'redux-actions'

const initialState = {
    recipients: [],
    availableRecipients: [],
    body: ''
}

export default handleActions({
  'add recipient' (state, action) {
    return {
        recipients: [...state.recipients, action.payload],
        availableRecipients: [...state.availableRecipients],
        body: state.body
    }
  },

  'add body' (state, action) {
    return {
        recipients: [...state.recipients],
        availableRecipients: [...state.availableRecipients],
        body: action.payload
    }
  }
}, initialState)
