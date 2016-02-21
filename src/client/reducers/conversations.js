
import { handleActions } from 'redux-actions'

const initialState = {
    selectedConversation: 0,
    conversations: [],
    conversationsById: {}
}

export default handleActions({
  'add conversation' (state, action) {
    var selectedConversation = 0
    var conversationId = state.conversations.reduce((maxId, conversation) => Math.max(conversation.id, maxId), -1) + 1
    var conversation = {
      id: conversationId,
      title: action.payload.title
    }
    var conversations = [conversation, ...state]
    var conversationsById = Object.assign({}, state.conversations.conversationsById)
    conversationsById[conversationId] = conversation

    return Object.assign({}, state, {
      selectedConversation: selectedConversation,
      conversations: conversations,
      conversationsById: conversationsById
    })
  }
}, initialState)
