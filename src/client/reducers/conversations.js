
import { handleActions } from 'redux-actions'

const initialState = {
    selectedConversation: 0,
    conversations: [],
    conversationsById: {}
}

export default handleActions({
  'add conversation' (state, action) {
    var selectedConversation = action.payload.id
    var conversation = action.payload
    conversation.title = action.payload.title || (conversation.participants ? conversation.participants.map(function (participant) {
        return participant.split('/')[1]
    }).join(', ') : 'New Message')
console.log('~~~~~~~', conversation)
    var conversations = [conversation.id, ...state.conversations]
    var conversationsById = Object.assign({}, state.conversationsById)
    conversationsById[action.payload.id] = conversation

    return Object.assign({}, state, {
      selectedConversation: selectedConversation,
      conversations: conversations,
      conversationsById: conversationsById
    })
  },

  'add message' (state, action) {
    var conversationsById = Object.assign({}, state.conversationsById)
    conversationsById[action.payload.conversationId].messages = [action.payload, ...state.conversationsById[action.payload.conversationId]]
    return Object.assign({}, state, {
      conversationsById: conversationsById 
    })
  },

  'update conversation list' (state, action) {
    return Object.assign({}, state, {
      conversations: [...action.payload]
    })
  }
}, initialState)
