
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
    var u = {}
    var recipients = []
    for (let recipient of [...state.recipients, 'users/'+action.payload]) {
      if (!u.hasOwnProperty(recipient) ) {
        u[recipient] = recipient
        recipients.push(recipient)
      }
    }
    return {
        recipients: recipients,
        body: state.body
    }
  },

  'remove recipient' (state, action) {
  },

  'add message body' (state, action) {
    return {
        recipients: [...state.recipients],
        body: action.payload
    }
  }
}, initialState)
