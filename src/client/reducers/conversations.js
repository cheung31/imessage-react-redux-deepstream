
import { handleActions } from 'redux-actions'

const initialState = {
    conversations: [],
    conversationsById: {}
}

export default handleActions({
  'view conversation' (state, action) {
    return Object.assign({}, state, {
        selectedConversation: action.payload
    })
  },

  'add conversation' (state, action) {
    var conversation = action.payload
    conversation.title = action.payload.title || (conversation.participants ? conversation.participants.map(function (participant) {
        return participant.split('/')[1]
    }).join(', ') : 'New Message')
    var conversations = [...state.conversations]
    if (conversations.indexOf(conversation.id) == -1) {
        conversations.unshift(conversation.id)
    }
    var conversationsById = Object.assign({}, state.conversationsById)
    conversationsById[conversation.id] = conversation

    return Object.assign({}, state, {
      conversations: conversations,
      conversationsById: conversationsById
    })
  },

  'add message' (state, action) {
    var conversationsById = Object.assign({}, state.conversationsById)
    conversationsById[action.payload.conversationId].messages = [action.payload, ...state.conversationsById[action.payload.conversationId].messages]
    conversationsById[action.payload.conversationId].lastMessage = action.payload.body
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
